const Sequelize = require('sequelize')
const db = require('../db')
const moment = require('moment')

const Project = db.define('project', {
  title: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  startDate: {
    type: Sequelize.DATEONLY,
    get: function () {
      return moment(this.getDataValue('startDate')).format('MM.DD.YYYY')
    }
  },
  dueDate: {
    type: Sequelize.DATEONLY,
    get: function () {
      return moment(this.getDataValue('dueDate')).format('MM.DD.YYYY')
    }
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
