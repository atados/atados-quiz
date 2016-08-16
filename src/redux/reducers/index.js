import { combineReducers } from 'redux'
import quizReducer from './quizReducer'
import quizProjectsReducer from './quizProjectsReducer';



export default combineReducers({
  quiz: quizReducer,
  projects: quizProjectsReducer
})
