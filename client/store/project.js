import axios from 'axios'

// ACTION TYPES
const SET_PROJECT = 'SET_PROJECT'

// ACTION CREATORS
const setProject = (project) => ({
  type: SET_PROJECT,
  project
})

export const fetchProject = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/projects/${id}`);
    return dispatch(setProject(data))
  }
}

export default function projectReducer(state = {}, action) {
  switch (action.type) {
    case SET_PROJECT:
      return action.project
    default:
      return state
  }
}
