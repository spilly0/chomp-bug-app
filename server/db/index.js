//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Project = require('./models/Project')
const Task = require('./models/Task')
const Comment = require('./models/Comment')

//associations could go here!
Task.belongsTo(Project) // Task belongs to Project
Task.belongsTo(User) // Tasks belong to User
Project.belongsTo(User) // Project belongs to User
Comment.belongsTo(Task) // Comment belongs to Task
Comment.belongsTo(User)

Project.hasMany(Task) //Project has many Task
User.hasMany(Task) // User has many Task
User.hasMany(Project) // User has many Project
Task.hasMany(Comment) // Task has many Comment


module.exports = {
  db,
  models: {
    User,
    Project,
    Task,
    Comment
  },
}
