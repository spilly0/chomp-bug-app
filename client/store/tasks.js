import axios from 'axios'

// ACTION TYPES
const SET_TASKS = 'SET_TASKS'

// ACTION CREATORS
const setTasks = (tasks) => ({
  type: SET_TASKS,
  tasks
})

export const fetchTasks = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/tasks');
    return dispatch(setTasks(data))
  }
}

export default function tasksReducer(state = [], action) {
  switch (action.type) {
    case SET_TASKS:
      return action.tasks
    default:
      return state
  }
}
