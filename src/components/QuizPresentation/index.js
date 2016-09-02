import React from 'react'
import PresentationImage from './presentation-image.jpg'
import Logo from './presentation-logo.png';

const QuizPresentation = ({ onStartClick }) => {
  return (
    <div className="quiz-container">
      <div className="col-md-6 quiz-presentation-image quiz-image" style={{ backgroundImage: `url(${PresentationImage})` }} />
      <div className="col-md-6 quiz-presentation-col">
        <div className="quiz-presentation-content">
          <div className="quiz-presentation-logo">
            <img src={ Logo } alt=""/>
          </div>
          <div className="quiz-presentation-start">
            <div className="quiz-box quiz-presentation-box">
              <h1 className="quiz-title">Quiz voluntário</h1>
              <p className="quiz-subtitle">Já pensou em ser voluntário? Escolha as opções que mais te chamam a atenção e descubra as vagas que têm a sua cara</p>
              <button onClick={ onStartClick } className="btn quiz-button">Clique aqui para começar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

QuizPresentation.displayName = 'QuizPresentation';

export default QuizPresentation;
