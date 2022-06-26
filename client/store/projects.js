import axios from 'axios'

// ACTION TYPES
const SET_PROJECTS = 'SET_PROJECTS'

// ACTION CREATORS
const setProjects = (projects) => ({
  type: SET_PROJECTS,
  projects
})

export const fetchProjects = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/projects');
    return dispatch(setProjects(data))
  }
}

export default function projectsReducer(state = [], action) {
  switch (action.type) {
    case SET_PROJECTS:
      return action.projects
    default:
      return state
  }
}
