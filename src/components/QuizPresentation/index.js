import React from 'react'
import PresentationImage from './presentation-image.jpg'
import Logo from './presentation-logo.png';

const QuizPresentation = ({ onStartClick }) => {
  return (
    <div className="quiz-container">
      <div className="col-md-6 quiz-image" style={{ backgroundImage: `url(${PresentationImage})` }} />
      <div className="col-md-6 quiz-presentation-col">
        <div className="quiz-presentation-logo">
          <img src={ Logo } alt=""/>
        </div>
        <div className="quiz-presentation-start">
          <div className="quiz-box quiz-presentation-box">
            <h1 className="quiz-title">Quizz do volutário</h1>
            <p className="quiz-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur atque, quo obcaecati iusto illum delectus ipsum molestias soluta placeat ullam excepturi rerum accusantium, optio, ratione dignissimos esse nostrum quidem tempore!</p>
            <button onClick={ onStartClick } className="btn btn-lg">Clique aqui para começar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

QuizPresentation.displayName = 'QuizPresentation';

export default QuizPresentation;
