import { RECEIVE_PROJECTS, REQUEST_PROJECTS } from '../../actions/quizProjectsActions'

const initialState = {
  items: {},
  fetched: {
    causes: [],
    skills: []
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
      return {
        ...state,
        items: {
          ...state.items,
          ...action.projects
        },
        isFetching: false
      }
    default:
      return state
  }
}

export default projects
