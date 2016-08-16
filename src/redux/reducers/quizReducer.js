import questions, { firstQuestion } from '../../content/questions'
import { QUIZ_RESET, STEP_PRESENTATION, SET_STEP, SET_CURRENT_QUESTION, ANSWER_QUESTION, SET_RESULTS } from '../../actions/quizActions'
import causes from '../../content/causes'
import skills from '../../content/skills'

const initialState = {
  currentStep: STEP_PRESENTATION,
  questions: questions,
  currentQuestion: firstQuestion,
  answers: {
    causes: {},
    skills: {}
  },
  causes: causes,
  skills: skills
}

const quiz = (state = initialState, action) => {
  switch (action.type) {
    case QUIZ_RESET:
      return {
        ...initialState,
        answers: {
          causes: {},
          skills: {}
        }
      }
    case SET_STEP:
      return {
        ...state,
        currentStep: action.step
      }
    case ANSWER_QUESTION:
      const answers = { ...state.answers }
      const answer = action.answer

      if (answer.causes) {
        answer.causes.forEach(cause_id => {
          answers.causes[cause_id] = answers.causes[cause_id]
            ? answers.causes[cause_id] + 1
            : 1
        })
      }

      if (answer.skills) {
        answer.skills.forEach(skill_id => {
          answers.skills[skill_id] = answers.skills[skill_id]
            ? answers.skills[skill_id] + 1
            : 1
        })
      }

      return {
        ...state,
        answers
      }
    case SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.question_key,
      }
    case SET_RESULTS:
      return {
        ...state,
        results: action.results
      }
    default:
      return state
  }
}

export default quiz
