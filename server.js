require('dotenv').config()
// Load express
const express = require('express');
const mongoose = require('mongoose');


// Create our express app
const app = express();
const PORT = 3001
const Todos = require('./models/Todos');
const Groceries = require('./models/Groceries')
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


app.get('/todos/new', (req, res) => {
    res.render('NewTodo');
});

app.post('/todos', (req, res) => {
    Todos.create(req.body, (error, createdTodo) => {
        res.redirect('/todos');
    });
});


app.delete('/todos/:id', (req, res) => {
    Todos.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/todos');
    });
});

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



app.listen(3001, function () {
    console.log('Listening on port 3001');
  });