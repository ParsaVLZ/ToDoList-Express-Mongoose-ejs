const bodyParser = require('body-parser');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const taskRoutes = require('./routes/task.routes');
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/todolist').then(() => {
    console.log('Connected to MongoDB Successfully...');
  }).catch((err) => {
    console.error('Failed to connect to MongoDB!', err);
  });;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/layout');
app.use(methodOverride('_method'));

app.use('/tasks', taskRoutes);
app.use((req, res, next) => {
    res.status(404).send('Page not found');
  });

app.listen(PORT, () => {
    console.log(`Server is running on: http:localhost:${PORT}`);
})
