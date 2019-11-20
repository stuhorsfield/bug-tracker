const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = Task = mongoose.model("task", TaskSchema);
