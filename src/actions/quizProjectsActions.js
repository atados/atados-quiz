import { arrayToObject } from '../utils'
import reqwest from 'reqwest'
export const REQUEST_PROJECTS = 'REQUEST_PROJECTS'
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS'
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT'

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

function fetchProjectsByCauseAndSkill(causes, skills) {
  return dispatch => {
    dispatch(requestProjects())
    const _skills = skills.join(',')
    const _causes = causes.join(',')
    return reqwest({
      url: `https://api.atados.com.br/v1/projects/?causes=${_causes}&skills=${_skills}&address=%7B%22address_components%22:%5B%7B%22long_name%22:%22S%C3%A3o+Paulo%22,%22types%22:%5B%22administrative_area_level_1%22,%22political%22%5D%7D%5D%7D`,
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
