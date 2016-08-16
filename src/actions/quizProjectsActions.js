import { arrayToObject } from '../utils'
import reqwest from 'reqwest'
export const REQUEST_PROJECTS = 'REQUEST_PROJECTS'
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS'

function requestProjects() {
  return {
    type: REQUEST_PROJECTS
  }
}

function receivePosts(projects) {
  return {
    type: RECEIVE_PROJECTS,
    projects: arrayToObject(projects, 'id'),
    receivedAt: Date.now()
  }
}

function fetchProjectsByCauseAndSkill(cause, skill) {
  return dispatch => {
    dispatch(requestProjects())
    return reqwest({
      url: `https://api.atados.com.br/v1/projects/?cause=${cause}&skill=${skill}`,
      type: 'json'
    })
    .then(resp => {
      return dispatch(receivePosts(resp.results))
    })
  }
}

function shouldFetchProjects(state, cause, skill) {
  const { fetched }= state.projects;
  return fetched.causes.indexOf(cause) === -1
    || fetched.skills.indexOf(skill) === -1
}

export function fetchProjectsIfNeeded(cause, skill) {
  return (dispatch, getState) => {
    if (shouldFetchProjects(getState(), cause, skill)) {
      return dispatch(fetchProjectsByCauseAndSkill(cause, skill))
    }
  }
}
