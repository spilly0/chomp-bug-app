const router = require('express').Router()
const { models: { Task, Comment, User } } = require('../db')
module.exports = router

// GET route serves up all tasks
router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.findAll({
      include: User
    })
    res.json(tasks)
  } catch (error) {
    next(error)
  }
})

// GET route serve up tasks based on the
router.get('/:id', async (req, res, next) => {
  try {
    const tasks = await Task.findByPk(req.params.id,
      {
        include: [{
          model: Comment,
          include: {
            model: User
          }
        },
        {
          model: User
        }]
      }
    )
    res.json(tasks)
  } catch (error) {
    next(error)
  }
})
