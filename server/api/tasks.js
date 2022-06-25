const router = require('express').Router()
const { models: { Task, Comment } } = require('../db')
module.exports = router

// GET route serve up tasks based on the
router.get('/:id', async (req, res, next) => {
  try {
    const tasks = await Task.findAll({
      where: { userId: req.params.id },
      include: Comment
    })
    res.json(tasks)
  } catch (error) {
    next(error)
  }
})
