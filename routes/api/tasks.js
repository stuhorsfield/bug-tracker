const express = require("express");
const router = express.Router();

// Task model
const Task = require("../../models/Task");

// @route   GET api/tasks
// @desc    Get all Tasks
// @access  Public
router.get("/", (req, res) => {
  Task.find()
    .sort({ dateCreated: -1 })
    .then(tasks => res.json(tasks));
});

// @route   POST api/tasks
// @desc    Create a new Task
// @access  Public
router.post("/", (req, res) => {
  const newTask = new Task({
    title: req.body.title,
    description: req.body.description
  });

  newTask
    .save()
    .then(item => res.json(item))
    .catch(res.err);
});

// @route   DELETE api/tasks/:id
// @desc    Delete a Task
// @access  Public
router.delete("/:id", (req, res) => {
  Task.findById(req.params.id)
    .then(task => task.remove())
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false, err: err }));
});

module.exports = router;
