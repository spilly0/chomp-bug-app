const router = require('express').Router()
const { models: { Project, Task, User } } = require('../db')
module.exports = router

// GET route - serve up all projects
router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.findAll({
      include:
        { model: User }
    })
    res.json(projects)
  } catch (error) {
    next(error)
  }
})

// GET route - serve up specific project with tasks
router.get('/:id', async (req, res, next) => {
  try {
    console.log('here')
    const project = await Project.findOne({
      where: { id: req.params.id },
      include: Task,
      include: User
    })
    res.json(project)
  } catch (error) {
    next(error)
  }
})

