import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getFeedbackById, updateFeedback } from '../services/feedbackService';

const initialForm = {
  courseName: '',
  courseDuration: '',
  comments: '',
  rating: '5',
};

function EditFeedback() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const loadFeedback = async () => {
      try {
        const data = await getFeedbackById(id);
        const item = data.data || data;

        setFormData({
          courseName: item.courseName || '',
          courseDuration: item.courseDuration || '',
          comments: item.comments || '',
          rating: String(item.rating || 5),
        });
      } catch (err) {
        setError(err.message || 'Unable to load feedback details.');
      } finally {
        setLoading(false);
      }
    };

    loadFeedback();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await updateFeedback(id, {
        courseName: formData.courseName,
        courseDuration: formData.courseDuration,
        comments: formData.comments,
        rating: Number(formData.rating),
      });

      navigate('/');
    } catch (err) {
      setError(err.message || 'Failed to update feedback.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <div className="status-card">Loading feedback details...</div>;
  }

  if (error) {
    return <div className="status-card error">{error}</div>;
  }

  return (
    <section className="card form-card">
      <div className="section-header">
        <div>
          <p className="eyebrow">Manage</p>
          <h2>Edit Feedback</h2>
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
            />
          </div>

          <div className="form-field">
            <label htmlFor="courseDuration">Course Duration</label>
            <input
              id="courseDuration"
              name="courseDuration"
              type="text"
              value={formData.courseDuration}
              onChange={handleChange}
            />
          </div>

          <div className="form-field full-width">
            <label htmlFor="comments">Feedback Comments</label>
            <textarea
              id="comments"
              name="comments"
              rows="5"
              value={formData.comments}
              onChange={handleChange}
            ></textarea>
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
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="button primary-button" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save Changes'}
          </button>

          <Link to="/" className="button secondary-button">
            Cancel
          </Link>
        </div>
      </form>
    </section>
  );
}

export default EditFeedback;
