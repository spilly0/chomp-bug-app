import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import auth from './auth'
import projectsReducer from './projects'
import projectReducer from './project'
import tasksReducer from './tasks'
import taskReducer from './task'

const reducer = combineReducers({
  auth,
  projects: projectsReducer,
  project: projectReducer,
  tasks: tasksReducer,
  task: taskReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
