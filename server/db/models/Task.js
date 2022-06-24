const Sequelize = require('sequelize')
const db = require('../db')

const Task = db.define('task', {
  priority: {
    type: Sequelize.ENUM('low', 'normal', 'high', 'critical'),
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'inwork', 'closed')
  },
  description: {
    type: Sequelize.TEXT
  },
  createdOn: {
    type: Sequelize.DATE
  },
  createdBy: {
    type: Sequelize.INTEGER
  }
})

module.exports = Task
