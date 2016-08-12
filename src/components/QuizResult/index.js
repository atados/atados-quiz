import React from 'react'
import QuizResultItem from '../QuizResultItem'
import DogImage from '../QuizResultItem/dog-image.jpg';

const QuizResult = ({ className }) => {
  return (
    <div className="quiz-result">
      <div className="container">
        <div className="quiz-question-info">
          <h1 className="quiz-title">Quizz do volutário</h1>
        </div>
        <div className="quiz-box">
          <div className="quiz-box-content">
            <h2 className="quiz-result-section-title">Suas <span className="quiz-highlight">causas</span> são:</h2>
            <div className="row">
              <div className="col-md-6">
                <QuizResultItem name="Proteção animal" image={ DogImage } />
              </div>
              <div className="col-md-6">
                <QuizResultItem name="Proteção animal" image={ DogImage } />
              </div>
            </div>
            <h2 className="quiz-result-section-title">Suas <span className="quiz-highlight">habilidades</span> são:</h2>
            <div className="row">
              <div className="col-md-6">
                <QuizResultItem name="Proteção animal" image={ DogImage } />
              </div>
              <div className="col-md-6">
                <QuizResultItem name="Proteção animal" image={ DogImage } />
              </div>
            </div>
            <button className="btn quiz-button">Vagas disponíveis</button>
          </div>
        </div>
      </div>
    </div>
  );
};

QuizResult.displayName = 'QuizResult';

export default QuizResult;
