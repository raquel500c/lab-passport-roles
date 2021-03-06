const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  startingDate: Date,
  endDate: Date,
  level: {
      type: String,
      enum : ['Beginner', 'Advanced'],
      default : 'Beginner'
    },
  available:Boolean,
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Course = mongoose.model("Course", userSchema);

module.exports = Course;
