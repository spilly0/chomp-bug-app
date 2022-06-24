const Sequelize = require('sequelize')
const db = require('../db')

const Project = db.define('project', {
  createdOn: {
    type: Sequelize.DATE,
    defaultValue: new Date()
  },
  startDate: {
    type: Sequelize.DATE
  },
  dueDate: {
    type: Sequelize.DATE
  },
  lastModifiedDate: {
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
