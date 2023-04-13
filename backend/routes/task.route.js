const express = require("express");
const router = express.Router();
const {
  getTasks,
  getTask,
  addTask,
  editTask,
  deleteTask,
} = require("../controllers/task.controller");

router.get("/", getTasks).get("/:id", getTask);
router.post("/add", addTask);
router.patch("/:id/edit", editTask);
router.delete("/:id/delete", deleteTask);

module.exports = router;