const Sequelize = require('sequelize')
const db = require('../db')

const Comment = db.define('comment', {
  text: {
    type: Sequelize.TEXT
  },
  createdOn: {
    type: Sequelize.DATE
  },
  createdBy: {
    type: Sequelize.INTEGER
  }
})

module.exports = Comment
