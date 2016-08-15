import { arrayToObject } from '../utils'
import reqwest from 'reqwest'
export const STEP_PRESENTATION = 'STEP_PRESENTATION'
export const STEP_QUESTION = 'STEP_QUESTION'
export const STEP_RESULT = 'STEP_RESULT'
export const STEP_PROJECTS = 'STEP_PROJECTS'
export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION'
export const SET_STEP = 'SET_STEP'
export const QUIZ_RESET = 'QUIZ_RESET'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const SET_RESULTS = 'SET_RESULTS'

export const REQUEST_PROJECTS = 'REQUEST_PROJECTS'
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS'


export function setStep(step) {
  return {
    type: SET_STEP,
    step
  }
}

export function resetQuiz(step) {
  return {
    type: QUIZ_RESET
  }
}

export function setCurrentQuestion(question_key) {
  return {
    type: SET_CURRENT_QUESTION,
    question_key
  }
}

export function answerQuestion(question_key, answer) {
  return {
    type: ANSWER_QUESTION,
    question_key,
    answer
  }
}

export function setResults(results) {
  return {
    type: SET_RESULTS,
    results
  }
}

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
      url: `http://api.atados.com.br/v1/projects?cause=${cause}&skill=${skill}`,
      type: 'jsonp'
    })
    .then(resp => {
      console.log(resp);
      return dispatch(receivePosts(resp.items))
    })
  }
}

function shouldFetchProjects(state, cause, skill) {
  const fetched_by = state.quiz.projects_fetched_by;
  return fetched_by.cause.indexOf(cause) === -1
    || fetched_by.skill.indexOf(skill) === -1
}

export function fetchProjectsIfNeeded(cause, skill) {
  return (dispatch, getState) => {
    if (shouldFetchProjects(getState(), cause, skill)) {
      return dispatch(fetchProjectsByCauseAndSkill(cause, skill))
    }
  }
}
