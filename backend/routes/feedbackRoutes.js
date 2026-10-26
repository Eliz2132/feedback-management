const mongoose = require('mongoose');
const Feedback = require('../models/Feedback');

const validateFeedbackData = (data) => {
  const { courseName, courseDuration, comments, rating } = data;

  if (!courseName || !courseName.trim()) {
    return 'Course name is required.';
  }

  if (!courseDuration || !courseDuration.trim()) {
    return 'Course duration is required.';
  }

  if (!comments || !comments.trim()) {
    return 'Feedback comments are required.';
  }

  if (rating === undefined || rating === null || rating === '') {
    return 'Feedback rating is required.';
  }

  const ratingValue = Number(rating);
  if (Number.isNaN(ratingValue) || ratingValue < 1 || ratingValue > 5) {
    return 'Rating must be a number between 1 and 5.';
  }

  return null;
};

const getAllFeedback = async (req, res) => {
  try {
    const feedbackList = await Feedback.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: feedbackList.length,
      data: feedbackList,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching feedback data.',
      error: error.message,
    });
  }
};

const getFeedbackById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid feedback ID.',
    });
  }

  try {
    const feedback = await Feedback.findById(id);

    if (!feedback) {
      return res.status(404).json({
        success: false,
        message: 'Feedback record not found.',
      });
    }

    return res.status(200).json({
      success: true,
      data: feedback,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error fetching selected feedback.',
      error: error.message,
    });
  }
};

const createFeedback = async (req, res) => {
  const validationError = validateFeedbackData(req.body);

  if (validationError) {
    return res.status(400).json({
      success: false,
      message: validationError,
    });
  }

  try {
    const newFeedback = await Feedback.create({
      courseName: req.body.courseName,
      courseDuration: req.body.courseDuration,
      comments: req.body.comments,
      rating: Number(req.body.rating),
    });

    return res.status(201).json({
      success: true,
      message: 'Feedback created successfully.',
      data: newFeedback,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error creating feedback.',
      error: error.message,
    });
  }
};

const updateFeedback = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid feedback ID.',
    });
  }

  const validationError = validateFeedbackData(req.body);

  if (validationError) {
    return res.status(400).json({
      success: false,
      message: validationError,
    });
  }

  try {
    const updatedFeedback = await Feedback.findByIdAndUpdate(
      id,
      {
        courseName: req.body.courseName,
        courseDuration: req.body.courseDuration,
        comments: req.body.comments,
        rating: Number(req.body.rating),
      },
      { new: true, runValidators: true }
    );

    if (!updatedFeedback) {
      return res.status(404).json({
        success: false,
        message: 'Feedback record not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Feedback updated successfully.',
      data: updatedFeedback,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error updating feedback.',
      error: error.message,
    });
  }
};

const deleteFeedback = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid feedback ID.',
    });
  }

  try {
    const deletedFeedback = await Feedback.findByIdAndDelete(id);

    if (!deletedFeedback) {
      return res.status(404).json({
        success: false,
        message: 'Feedback record not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Feedback deleted successfully.',
      data: deletedFeedback,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error deleting feedback.',
      error: error.message,
    });
  }
};

module.exports = {
  getAllFeedback,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};
