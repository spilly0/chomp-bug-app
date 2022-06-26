import axios from 'axios'

// ACTION TYPES
const SET_TASK = 'SET_TASK'

// ACTION CREATORS
const setTask = (task) => ({
  type: SET_TASK,
  task
})

export const fetchTask = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/tasks/${id}`);
    return dispatch(setTask(data))
  }
}

export default function taskReducer(state = {}, action) {
  switch (action.type) {
    case SET_TASK:
      return action.task
    default:
      return state
  }
}
