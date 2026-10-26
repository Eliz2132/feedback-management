const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
      trim: true,
    },
    courseDuration: {
      type: String,
      required: true,
      trim: true,
    },
    comments: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    courseId: {
      type: String,
      unique: true,
      trim: true,
      default: function () {
        return `COURSE-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
      },
    },
  },
  { timestamps: true }
);

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
