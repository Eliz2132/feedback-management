import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteFeedback, getAllFeedback } from '../services/feedbackService';

function Dashboard() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadFeedback = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await getAllFeedback();
      setFeedbackList(response.data || []);
    } catch (err) {
      setError(err.message || 'Could not load feedback data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFeedback();
  }, []);

  const handleDelete = async (id) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this feedback record?');

    if (!shouldDelete) {
      return;
    }

    try {
      await deleteFeedback(id);
      await loadFeedback();
    } catch (err) {
      setError(err.message || 'Failed to delete the feedback record.');
    }
  };

  const renderRating = (rating) => {
    const safeRating = Number(rating) || 0;
    const filledStars = '★'.repeat(Math.max(0, safeRating));
    const emptyStars = '☆'.repeat(Math.max(0, 5 - safeRating));

    return (
      <span className="rating-text" title={`${safeRating}/5`}>
        {filledStars}{emptyStars} <span className="rating-number">{safeRating}/5</span>
      </span>
    );
  };

  if (loading) {
    return <div className="status-card">Loading feedback records...</div>;
  }

  if (error) {
    return <div className="status-card error">{error}</div>;
  }

  return (
    <section className="card dashboard-card">
      <div className="section-header">
        <div>
          <p className="eyebrow">Overview</p>
          <h2>Course Feedback Dashboard</h2>
        </div>
      </div>

      {feedbackList.length === 0 ? (
        <div className="empty-state">
          <p>No feedback has been submitted yet.</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Course ID</th>
                <th>Course Name</th>
                <th>Course Duration</th>
                <th>Overall Feedback Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {feedbackList.map((item) => (
                <tr key={item._id}>
                  <td>{item.courseId || 'N/A'}</td>
                  <td>{item.courseName || 'Unknown Course'}</td>
                  <td>{item.courseDuration || 'Not provided'}</td>
                  <td>{renderRating(item.rating)}</td>
                  <td>
                    <div className="action-group">
                      <Link to={`/edit/${item._id}`} className="button secondary-button small-button">
                        Update
                      </Link>

                      <button
                        type="button"
                        className="button danger-button small-button"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default Dashboard;
