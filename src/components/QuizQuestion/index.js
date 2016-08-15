import React from 'react'
import QuizAlternative from '../QuizAlternative'

function renderAlternatives(alternatives, onAlternativeClick) {
  const arr = []
  const rendered = []
  for( let label in alternatives) {
    if (alternatives.hasOwnProperty(label)) {
      arr.push(
        <div className="col-md-6">
          <QuizAlternative
            {...alternatives[label]}
            label={label}
            onClick={() => onAlternativeClick(label, alternatives[label]) }
          />
        </div>
      )
    }
  }

  for( let i = 0; i <= arr.length; i += 2) {
    rendered.push(
      <div className="row" key={i}>
        { arr[i] }
        { arr[i + 1] ? arr[i + 1] : null }
      </div>
    )
  }
  return rendered;
}

const QuizQuestion = ({ title, alternatives, onAlternativeClick }) => {
  return (
    <div className="quiz-question">
      <div className="container">
        <div className="quiz-question-info">
          <h1 className="quiz-title">Quizz do volutário</h1>
          <p className="quiz-subtitle">Escolha uma das respostas para vários mattis suspendisse. Fringilla sit amet velit non tincidunt</p>
        </div>
        <div className="quiz-box">
          <div className="quiz-home-button">
            <i className="fa fa-home"></i>
          </div>
          <div className="quiz-box-content">
            <h2 className="quiz-question-title">{ title }</h2>
            { renderAlternatives(alternatives, onAlternativeClick) }
          </div>
        </div>
      </div>
    </div>
  );
};

QuizQuestion.displayName = 'QuizQuestion';

export default QuizQuestion;
