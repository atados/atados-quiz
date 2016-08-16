import { RECEIVE_PROJECTS, REQUEST_PROJECTS } from '../../actions/quizProjectsActions'

const initialState = {
  items: {},
  fetched: {
    causes: [],
    skills: []
  }
}

const project = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PROJECTS:
      // statements_1
      break;
    default:
      // statements_def
      break;
  }
}


const projects = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PROJECTS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_PROJECTS:
      const items = { ...state.items }
      action.projects.forEach(project => {
        items[project.id] = project
      })

      return {
        ...state,
        items: items,
        isFetching: false
      }
    default:
      return state
  }
}

export default projects
