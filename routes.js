const router = require('express').Router()
const controllers = require('./controllers')

router.post('/', controllers.create)
router.get('/', controllers.getTodos)
router.get('/:todoId', controllers.deleteTodo)
router.get('/:todoId/complete', controllers.completeTodo)

module.exports = router