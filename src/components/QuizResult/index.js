import React from 'react'
import QuizResultItem from '../QuizResultItem'

function renderItems(items) {
  if (!items) return [];
  const rendered = []
  const arr = items.map( item => (
    <div className="col-md-6">
      <QuizResultItem
        {...item}
      />
    </div>
  ))


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

const QuizResult = ({ causes, skills, onShowVacanciesClick }) => {
  return (
    <div className="quiz-result">
      <div className="container">
        <div className="quiz-question-info">
          <h1 className="quiz-title">Quizz do volutário</h1>
        </div>
        <div className="quiz-box">
          <div className="quiz-box-content">
            <h2 className="quiz-result-section-title">Suas <span className="quiz-highlight">causas</span> são:</h2>
            { renderItems(causes) }
            <h2 className="quiz-result-section-title">Suas <span className="quiz-highlight">habilidades</span> são:</h2>
            { renderItems(skills) }
            <button onClick={ onShowVacanciesClick } className="btn quiz-button">Vagas disponíveis</button>
          </div>
        </div>
      </div>
    </div>
  );
};

QuizResult.displayName = 'QuizResult';

export default QuizResult;
