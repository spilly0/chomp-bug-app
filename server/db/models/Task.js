const Sequelize = require('sequelize')
const db = require('../db')

const Task = db.define('task', {
  priority: {
    type: Sequelize.ENUM('low', 'high', 'critical'),
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'inwork', 'closed')
  },
  description: {
    type: Sequelize.TEXT
  },
  createdBy: {
    type: Sequelize.INTEGER
  },
  dueDate: {
    type: Sequelize.DATEONLY
  }
})

module.exports = Task
