import React from 'react'
import { connect } from 'react-redux'
import QuizPresentation from '../components/QuizPresentation'
import QuizQuestion from '../components/QuizQuestion'
import QuizToolbar from '../components/QuizToolbar'
import QuizResult from '../components/QuizResult'
import QuizResultProjects from '../components/QuizResultProjects'
import { STEP_PRESENTATION, STEP_PROJECTS, STEP_RESULT, STEP_QUESTION, setStep, setCurrentQuestion, resetQuiz, answerQuestion, setResults } from '../actions/quizActions';
import { findBiggestValuesInObject } from '../utils'

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.handleQuestionAnswer = this.handleQuestionAnswer.bind(this)
    this.calculateResults = this.calculateResults.bind(this)
  }

  handleQuestionAnswer(question, label) {
    const answer = question.alternatives[label]
    this.props.answerQuestion(question.id, answer)
    if (answer.finish || question.finish) {
      this.calculateResults()
      this.props.setStep(STEP_RESULT)
    } else {
      this.props.setCurrentQuestion(answer.next || question.next)
    }
  }

  calculateResults() {
    const { answers }  = this.props;
    this.props.setResults({
      causes: findBiggestValuesInObject(answers.causes),
      skills: findBiggestValuesInObject(answers.skills)
    })
  }

  get content() {
    const { setStep, results } = this.props;

    switch (this.props.step) {
      case STEP_PRESENTATION:
        return <QuizPresentation onStartClick={() => setStep(STEP_QUESTION) } />

      case STEP_QUESTION:
        const question = this.props.question
        return <QuizQuestion
          {...question}
          results={results}
          onAlternativeClick={ (label) => this.handleQuestionAnswer(question, label) } />

      case STEP_RESULT:
        return <QuizResult {...results} onShowVacanciesClick={() => setStep(STEP_PROJECTS)} />

      case STEP_PROJECTS:
        return <QuizResultProjects />

      default:
        return null;
    }
  }

  render() {
    const { reset } = this.props
    return (
      <div className="quiz">
        <QuizToolbar onLogoClick={reset} />
        { this.content }
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => {
    const props = {
      step: state.quiz.currentStep,
      answers: state.quiz.answers
    }

    document.body.scrollTop = 0;

    if (state.quiz.results && props.step !== STEP_QUESTION) {
      props["results"] = {
        "causes": state.quiz.results.causes.map(id => state.quiz.causes[id]),
        "skills": state.quiz.results.skills.map(id => state.quiz.skills[id]),
      }
    } else {
      props["results"] = state.quiz.results
    }

    if (props.step === STEP_QUESTION) {
      props["question"] = {
        ...state.quiz.questions[state.quiz.currentQuestion],
        id: state.quiz.currentQuestion
      }
    }

    return props
  },
  dispatch => {
    return {
      setCurrentQuestion: question_key =>
        dispatch(setCurrentQuestion(question_key)),

      answerQuestion: (question_id, answer)  =>
        dispatch(answerQuestion(question_id, answer)),

      setStep: step =>
        dispatch(setStep(step)),

      reset: () =>
        dispatch(resetQuiz()),

      setResults: (results) =>
        dispatch(setResults(results))
    }
  }
)(Quiz);
