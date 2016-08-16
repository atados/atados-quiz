export const STEP_PRESENTATION = 'STEP_PRESENTATION'
export const STEP_QUESTION = 'STEP_QUESTION'
export const STEP_RESULT = 'STEP_RESULT'
export const STEP_PROJECTS = 'STEP_PROJECTS'
export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION'
export const SET_STEP = 'SET_STEP'
export const QUIZ_RESET = 'QUIZ_RESET'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const SET_RESULTS = 'SET_RESULTS'

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
