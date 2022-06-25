const Sequelize = require('sequelize')
const db = require('../db')

const Project = db.define('project', {
  title: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  startDate: {
    type: Sequelize.DATE
  },
  dueDate: {
    type: Sequelize.DATE
  },
  lastModifiedBy: {
    type: Sequelize.INTEGER
  },
  numOfTasks: {
    type: Sequelize.INTEGER
  },
  assignedBy: {
    type: Sequelize.INTEGER
  }
})

module.exports = Project
