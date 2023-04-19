require('dotenv').config()
// Load express
const express = require('express');
const mongoose = require('mongoose');


// Create our express app
const app = express();
const PORT = 3001
const Todos = require('./models/Todos');
const Groceries = require('./models/Groceries')
const Pantry = require('./models/Pantry')
const methodOverride = require('method-override');
// ------middleware


app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());

  app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({extended:false}));

app.use(methodOverride('_method'));

// mongoose.connect('mongodb+srv://rileytimlin:MONGO1@cluster0.mbufonv.mongodb.net/?retryWrites=true&w=majority');

  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.set('strictQuery', true);
  mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.get('/', (req, res) => {
    res.render('Home')
});

app.get('/todos', (req, res) =>{
    Todos.find({}, (error, allTodos)=>{
        res.render('TodosPage', { todos: allTodos});
    });
});

// Groceries Get:
app.get('/groceries', (req, res) => {
    Groceries.find({}, (error, allGroceries)=>{
        res.render('GroceriesPage', {groceries: allGroceries});
    });
});


// New Todo:
app.get('/todos/new', (req, res) => {
    res.render('NewTodo');
});

app.post('/todos', (req, res) => {
    Todos.create(req.body, (error, createdTodo) => {
        res.redirect('/todos');
    });
});

// New Grocery:
app.get('/groceries/new', (req, res) => {
    res.render('NewGrocery');
});

app.post('/groceries', (req, res) => {
    Groceries.create(req.body, (error, createdGrocery) => {
        res.redirect('/groceries');
    });
});

// Todo delete:
app.delete('/todos/:id', (req, res) => {
    Todos.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/todos');
    });
});
// Grocery Delete:
app.delete('/groceries/:id', (req, res) => {
    Groceries.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/groceries');
    });
});

// Todo edit:
app.get('/todos/:id/edit', (req, res)=>{
    Todos.findById(req.params.id, (err, foundTodo)=>{ 
      if(!err){
        res.render(
              'EditToDos',
            {
                todo: foundTodo 
            }
        );
    } else {
      res.send({ msg: err.message })
    }
    });
});

app.put('/todos/:id', (req, res)=>{
    if(req.body.completed === 'on'){
        req.body.completed= true;
    } else {
        req.body.completed = false;
    }
    Todos.findByIdAndUpdate(req.params.id, req.body, (err, updatedTodo)=>{
       console.log(updatedTodo)
        res.redirect(`/todos`);
    });
});

// Groery Edit:
app.get('/groceries/:id/edit', (req, res)=>{
    Groceries.findById(req.params.id, (err, foundGrocery)=>{ 
      if(!err){
        res.render(
              'EditGroceries',
            {
                grocery: foundGrocery
            }
        );
    } else {
      res.send({ msg: err.message })
    }
    });
});

app.put('/groceries/:id', (req, res)=>{
    Groceries.findByIdAndUpdate(req.params.id, req.body, (err, updatedGrocery)=>{
       console.log(updatedGrocery)
        res.redirect(`/groceries`);
    });
});


// Listener:
app.listen(3001, function () {
    console.log('Listening on port 3001');
  });