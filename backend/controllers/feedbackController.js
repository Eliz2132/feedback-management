const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema(
  {
    courseId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
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
  },
  {
    timestamps: true,
  }
);

feedbackSchema.pre('save', function (next) {
  if (!this.courseId) {
    const randomPart = Math.random().toString(36).slice(2, 8).toUpperCase();
    this.courseId = `COURSE-${Date.now()}-${randomPart}`;
  }

  this.courseName = this.courseName.trim();
  this.courseDuration = this.courseDuration.trim();
  this.comments = this.comments.trim();

  next();
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
