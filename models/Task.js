const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = Task = mongoose.model("task", TaskSchema);
