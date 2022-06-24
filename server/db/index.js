//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Project = require('./models/Project')
const Task = require('./models/Task')
const Comment = require('./models/Comment')

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Project,
    Task,
    Comment
  },
}
