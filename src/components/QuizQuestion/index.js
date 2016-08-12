import React from 'react'
import QuizAnswer from '../QuizAnswer'
import Image from '../QuizAnswer/image.jpg';

const QuizQuestion = ({ onAnswerClick }) => {
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
            <h2 className="quiz-question-title">1. Pergunta nonononoonon</h2>
            <div className="row">
              <div className="col-md-6">
                <QuizAnswer label="A" onClick={ onAnswerClick } image={Image}/>
              </div>
              <div className="col-md-6">
                <QuizAnswer label="B" onClick={ onAnswerClick }/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <QuizAnswer label="C" onClick={ onAnswerClick }/>
              </div>
              <div className="col-md-6">
                <QuizAnswer label="D" onClick={ onAnswerClick }/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

QuizQuestion.displayName = 'QuizQuestion';

export default QuizQuestion;
