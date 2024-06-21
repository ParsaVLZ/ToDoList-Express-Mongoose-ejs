const Task = require("../model/task.model")

getAllTasks = async (req, res, next) => {
    try {
      const tasks = await Task.find({});
      res.render('index', { tasks });
    } catch (err) {
      next(err);
    }
}

newTaskForm = (req, res) => {
    res.render('new');
  };

newTask = async (req, res, next) => {
    try {
      const { title, description } = req.body;
      await Task.create({ title, description });
      res.redirect('/tasks');
    } catch (err) {
      next(err);
    }
}

editTaskForm = async (req, res, next) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) {
        return res.status(404).send('Task not found');
      }
      res.render('edit', { task });
    } catch (err) {
      next(err);
    }
  };

editTask = async (req, res, next) => {
    try {
      const { title, description, status } = req.body;
      await Task.findByIdAndUpdate(req.params.id, { title, description, status });
      res.redirect('/tasks');
    } catch (err) {
      next(err);
    }
}

editTaskStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    await Task.findByIdAndUpdate(req.params.id, { status });
    res.send('Task status updated successfully');
  } catch (err) {
    next(err);
  }
};

deleteTask = async (req, res, next) => {
    try {
      await Task.findByIdAndDelete(req.params.id);
      res.redirect('/tasks');
    } catch (err) {
      next(err);
    }
}

module.exports = {
    getAllTasks,
    newTaskForm,
    newTask,
    editTaskForm,
    editTask,
    editTaskStatus,
    deleteTask
}