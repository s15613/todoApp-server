const Todo = require('./models')

exports.create = async (req, res) => {
    const data = req.body
    try {
        const newTodo = new Todo(data)
        await newTodo.save()
        res.json(newTodo)
    } catch (err) {
        console.log(error)
    }
}

exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.json(todos)
    } catch (err) {
        console.log(err)
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.todoId)
        await todo.remove()
        res.json(todo)
    } catch (err) {
        consolel.log(err)
    }
}

exports.completeTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.todoId)
        todo.isCompleted = !todo.isCompleted
        await todo.save()
        res.json(todo)
    } catch (err) {
        console.log(err)
    }
}