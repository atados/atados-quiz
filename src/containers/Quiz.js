import React from 'react'
import QuizPresentation from '../components/QuizPresentation'
import QuizQuestion from '../components/QuizQuestion'
import QuizToolbar from '../components/QuizToolbar'
import { connect } from 'react-redux';

const Quiz = ({ step, dispatch, nextStep }) => {
  const questions = [ 1 ]
  return (
    <div className="quiz">
      <QuizToolbar />
      {
        step === -1
        ? <QuizPresentation onStartClick={ nextStep } />
        : step >= questions.length
          ? "Finished"
          : <QuizQuestion question={ questions[step] }/>
      }
    </div>
  );
};

Quiz.displayName = 'Quiz'

export default connect(
  (state) => {
    return {
      step: state.quiz.currentStep
    }
  },
  (dispatch) => {
    return {
      nextStep: () => {
        return dispatch({
          type: 'NEXT_STEP'
        })
      }
    }
  }
)(Quiz);
