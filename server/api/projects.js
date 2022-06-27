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
    const project = await Project.findByPk(req.params.id,
      {
        include: [{
          model: Task,
          where: {
            projectId: req.params.id
          },
          include: {
            model: User
          }
        },
        {
          model: User
        }]
      })
    res.json(project)
  } catch (error) {
    next(error)
  }
})

router.post('/add', async (req, res, next) => {
  try {
    console.log(req.body)
  } catch (error) {
    next(error)
  }
})
