const { Router } = require("express");
const { getAllTasks, newTaskForm, newTask, editTask, editTaskForm, deleteTask, editTaskStatus } = require("../controller/task.controller");

const router = Router();

router.get('/', getAllTasks);
router.get('/new', newTaskForm);
router.post('/', newTask);
router.get('/:id/edit', editTaskForm);
router.put('/:id', editTask);
router.put('/:id/status', editTaskStatus);
router.delete('/:id', deleteTask);

module.exports = router;