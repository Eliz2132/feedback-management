import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createFeedback } from '../services/feedbackService';

const initialForm = {
  courseName: '',
  courseDuration: '',
  comments: '',
  rating: '5',
};

function AddFeedback() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.courseName.trim()) {
      nextErrors.courseName = 'Course name is required.';
    }

    if (!formData.courseDuration.trim()) {
      nextErrors.courseDuration = 'Course duration is required.';
    }

    if (!formData.comments.trim()) {
      nextErrors.comments = 'Feedback comments are required.';
    }

    const numericRating = Number(formData.rating);
    if (!Number.isFinite(numericRating) || numericRating < 1 || numericRating > 5) {
      nextErrors.rating = 'Rating must be between 1 and 5.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await createFeedback({
        courseName: formData.courseName,
        courseDuration: formData.courseDuration,
        comments: formData.comments,
        rating: Number(formData.rating),
      });

      setSubmitMessage('Feedback saved successfully!');
      setFormData(initialForm);

      setTimeout(() => {
        navigate('/');
      }, 600);
    } catch (err) {
      setSubmitMessage(err.message || 'Failed to save feedback.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="card form-card">
      <div className="section-header">
        <div>
          <p className="eyebrow">Manage</p>
          <h2>Add Feedback</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="courseName">Course Name</label>
            <input
              id="courseName"
              name="courseName"
              type="text"
              value={formData.courseName}
              onChange={handleChange}
              placeholder="e.g. Full Stack Development"
            />
            {errors.courseName && <small className="error-text">{errors.courseName}</small>}
          </div>

          <div className="form-field">
            <label htmlFor="courseDuration">Course Duration</label>
            <input
              id="courseDuration"
              name="courseDuration"
              type="text"
              value={formData.courseDuration}
              onChange={handleChange}
              placeholder="e.g. 4 Weeks"
            />
            {errors.courseDuration && <small className="error-text">{errors.courseDuration}</small>}
          </div>

          <div className="form-field full-width">
            <label htmlFor="comments">Feedback Comments</label>
            <textarea
              id="comments"
              name="comments"
              rows="5"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Describe the course experience..."
            ></textarea>
            {errors.comments && <small className="error-text">{errors.comments}</small>}
          </div>

          <div className="form-field">
            <label htmlFor="rating">Feedback Rating</label>
            <select id="rating" name="rating" value={formData.rating} onChange={handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {errors.rating && <small className="error-text">{errors.rating}</small>}
          </div>
        </div>

        {submitMessage && (
          <div className={submitMessage.includes('successfully') ? 'success-message' : 'error-message'}>
            {submitMessage}
          </div>
        )}

        <div className="form-actions">
          <button type="submit" className="button primary-button" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Submit'}
          </button>

          <Link to="/" className="button secondary-button">
            Back to Dashboard
          </Link>
        </div>
      </form>
    </section>
  );
}

export default AddFeedback;
