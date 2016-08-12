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
            <p className="quiz-subtitle">Lorem ipsum dolor sit amet, ac eleifend massa justo elementum, integer orci sapien. Ultricies vel non, sit vel vitae. Socieosqu semper mauris dolor, integer rutrum in vestibulum massa.</p>
            <button onClick={ onStartClick } className="btn quiz-button">Clique aqui para começar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

QuizPresentation.displayName = 'QuizPresentation';

export default QuizPresentation;
