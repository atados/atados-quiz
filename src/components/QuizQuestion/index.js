import React from 'react'
import QuizAlternative from '../QuizAlternative'
import { containAll } from '../../utils'

function renderAlternatives(alternatives, onAlternativeClick, results) {
  const arr = []
  const rendered = []
  for( let label in alternatives) {
    if (alternatives.hasOwnProperty(label)) {

      let alternative = alternatives[label]
      let _label = label

      if (
        (alternative.causes && results.causes.length && containAll(results.causes, alternative.causes)) ||
        (alternative.skills && results.skills.length && containAll(results.skills, alternative.skills)) ) {
        _label = alternative.otherwise
        alternative = alternatives[_label]
        console.log(label)
      }

      arr.push(
        <div className="col-md-6">
          <QuizAlternative
            {...alternative}
            label={label}
            onClick={() => onAlternativeClick(_label, alternative) }
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

const QuizQuestion = ({ title, alternatives, onAlternativeClick, results }) => {
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
            { renderAlternatives(alternatives, onAlternativeClick, results) }
          </div>
        </div>
      </div>
    </div>
  );
};

QuizQuestion.displayName = 'QuizQuestion';

export default QuizQuestion;
