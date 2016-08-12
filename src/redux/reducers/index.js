import { combineReducers } from 'redux'

export default combineReducers({
  quiz: (state = { currentStep: -1 }, action) => {
    switch (action.type) {
      case 'NEXT_STEP':
        return { currentStep: state.currentStep + 1 }
      default:
        return state
    }
  }
})
