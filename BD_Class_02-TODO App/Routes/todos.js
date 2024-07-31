

const express= require('express');

const router= express.Router();

//  import controller:
const {createTodo}= require('../Controller/createTodo')
const {getTodos,getTodosById}= require('../Controller/getTodos')

const {updateTodoById}= require('../Controller/updateTodo')

const {deleteTodo} = require('../Controller/deleteTodo')

// define api routes to post data
router.post("/createTodo", createTodo);

// define api route to get data
router.get("/getTodos", getTodos);
router.get("/getTodosById/:id", getTodosById);

// define api route to update data in database:
router.put("/updateTodoById/:id",updateTodoById)

// define api route to delete data from the database:
router.delete('/deleteTodo/:id',deleteTodo)

module.exports= router; 
