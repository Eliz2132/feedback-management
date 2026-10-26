const express = require('express');
const router = express.Router();
const {
  getAllFeedback,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
} = require('../controllers/feedbackController');

router.get('/feedback', getAllFeedback);
router.get('/feedback/:id', getFeedbackById);
router.post('/feedback', createFeedback);
router.put('/feedback/:id', updateFeedback);
router.delete('/feedback/:id', deleteFeedback);

module.exports = router;
