import React from 'react'
import QuizResultItem from '../QuizResultItem'
import QuizResultProjects from '../QuizResultProjects'

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

function renderPlural(string, array) {
  if (array.length === 1) {
    return string
  }
  return string+"s";
}

function renderLinkingVerb(array) {
  if (array.length === 1) {
    return "é"
  }
  return "são"
}

function renderTitle(string, array) {
  return <span>{ renderPlural('Sua', array) } <span className="quiz-highlight">{ renderPlural(string, array) }</span> { renderLinkingVerb(array) }:</span>
}

const QuizResult = ({ causes, skills }) => {
  return (
    <div className="quiz-result">
      <div className="container">
        <div className="quiz-question-info">
          <h1 className="quiz-title">Quiz do voluntário</h1>
        </div>
        <div className="quiz-box">
          <a className="quiz-home-button" href="/">
            <i className="fa fa-home"></i>
          </a>
          <a className="quiz-home-button quiz-home-button-top" href="/">
            <i className="fa fa-home"></i>
          </a>
          <div className="quiz-box-content">
            <h2 className="quiz-result-section-title">{ renderTitle('causa', causes) }</h2>
            { renderItems(causes) }
            <h2 className="quiz-result-section-title">{ renderTitle('habilidade', skills) }</h2>
            { renderItems(skills) }
            <QuizResultProjects />
          </div>
        </div>
      </div>
    </div>
  );
};

QuizResult.displayName = 'QuizResult';

export default QuizResult;
