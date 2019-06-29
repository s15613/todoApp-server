const router = require('express').Router()
const controllers = require('./controllers')

router.post('/', controllers.create)
router.get('/', controllers.getTodos)
router.get('/delete/all', controllers.deleteAll)
router.post('/:todoId', controllers.deleteTodo)
router.post('/:todoId/complete', controllers.completeTodo)

module.exports = router