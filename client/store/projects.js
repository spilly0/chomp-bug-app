import axios from 'axios'

// ACTION TYPES
const SET_PROJECTS = 'SET_PROJECTS'
const ADD_PROJECT = 'ADD_PROJECT'

// ACTION CREATORS
const setProjects = (projects) => ({
  type: SET_PROJECTS,
  projects
})

const createProject = (project) => ({
  type: ADD_PROJECT,
  project
})

export const fetchProjects = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/projects');
    dispatch(setProjects(data))
  }
}

export const sendCreateProject = (project, history) => {
  return async (dispatch) => {
    const { data } = await axios.post('/api/projects', project);
    dispatch(createProject(data))
    history.push('/projects')
  }
}

export default function projectsReducer(state = [], action) {
  switch (action.type) {
    case SET_PROJECTS:
      return action.projects
    case ADD_PROJECT:
      return [...state, action.project]
    default:
      return state
  }
}
