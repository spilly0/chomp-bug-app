'use strict'

const { db, models: { User, Project, Task, Comment } } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const openbelch = await User.create({ firstName: 'Open', lastName: 'Belch', username: 'openbelch', password: '123', role: 'admin', email: 'openbelch@gmail.com' })
  const shadowytoucan = await User.create({ firstName: 'Shadowy', lastName: 'Toucan', username: 'shadowytoucan', password: '123', role: 'general', email: 'shadowytoucan@gmail.com' })
  const liox = await User.create({ firstName: 'Leo', lastName: 'Perry', username: 'liox', password: '123', role: 'general', email: 'liox@gmail.com' })
  const sperrone = await User.create({ firstName: 'Sarah', lastName: 'Perrone', username: 'sperrone', password: '123', role: 'admin', email: 'sperrone@gmail.com' })

  const createFolio = await Project.create({ title: 'Create Portfolio Website', startDate: new Date(2022, 7, 15), dueDate: new Date(2022, 7, 28), lastModifiedBy: 1, assignedBy: 1, status: 'open' })
  const createTodo = await Project.create({ title: 'Create Todo List App', startDate: new Date(2022, 6, 15), dueDate: new Date(2022, 6, 28), lastModifiedBy: 1, assignedBy: 1, status: 'open' })
  const createMarciWeb = await Project.create({ title: 'Edit Marcellos website', startDate: new Date(2022, 7, 15), dueDate: new Date(2022, 7, 28), lastModifiedBy: 1, assignedBy: 4, status: 'open' })
  const graceShopper = await Project.create({ title: 'Finish GraceShopper', startDate: new Date(2022, 7, 15), dueDate: new Date(2022, 7, 28), lastModifiedBy: 1, assignedBy: 4, status: 'closed' })

  const createDatabase = await Task.create({ priority: 'high', status: 'open', description: 'Create database', createdBy: 1, dueDate: new Date(2022, 7, 20) })
  const editCSS = await Task.create({ priority: 'low', status: 'open', description: 'Edit CSS', createdBy: 1, dueDate: new Date(2022, 7, 20) })
  const addComponents = await Task.create({ priority: 'low', status: 'closed', description: 'Add components', createdBy: 1, dueDate: new Date(2022, 7, 20) })
  const deploySite = await Task.create({ priority: 'critical', status: 'open', description: 'Deploy Website', createdBy: 1, dueDate: new Date(2022, 7, 20) })

  const databaseComment = await Comment.create({ text: 'I will work on this today' })
  const CSSComment = await Comment.create({ text: 'Do you want me to get started on the dashboard?', createdAt: new Date(2022, 7, 15) })
  const CSSCommentReply = await Comment.create({ text: 'Yes please', createdAt: new Date(2022, 7, 16) })
  const CSSComment3 = await Comment.create({ text: 'Create a responsice sidebar', createdAt: new Date(2022, 7, 17) })

  await createFolio.setUser(sperrone)
  await createTodo.setUser(sperrone)
  await createMarciWeb.setUser(liox)

  await createDatabase.setProject(createFolio)
  await createDatabase.setUser(sperrone)
  await editCSS.setProject(createMarciWeb)
  await editCSS.setUser(liox)
  await addComponents.setProject(createFolio)
  await addComponents.setUser(shadowytoucan)
  await deploySite.setProject(createMarciWeb)
  await deploySite.setUser(shadowytoucan)

  await databaseComment.setUser(sperrone)
  await databaseComment.setTask(createDatabase)
  await CSSComment.setUser(liox)
  await CSSComment.setTask(editCSS)
  await CSSCommentReply.setUser(sperrone)
  await CSSCommentReply.setTask(editCSS)
  await CSSComment3.setUser(sperrone)
  await CSSComment3.setTask(editCSS)

  await createFolio.update({ numOfTasks: await createFolio.countTasks() })
  await createFolio.save()
  await createTodo.update({ numOfTasks: await createTodo.countTasks() })
  await createTodo.save()
  await createMarciWeb.update({ numOfTasks: await createMarciWeb.countTasks() })
  await createMarciWeb.save()
  await graceShopper.update({ numOfTasks: await graceShopper.countTasks() })
  await graceShopper.save()

  console.log('Project: ', Object.keys(Project.prototype))
  console.log('Comment: ', Object.keys(Comment.prototype))

  // console.log(`seeded ${users.length} users`)
  // console.log(`seeded successfully`)
  // return {
  //   users:
  //     cody: users[0],
  //     murphy: users[1]
  //   }
  // }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
