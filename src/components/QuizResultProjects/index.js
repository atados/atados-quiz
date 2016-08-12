import React from 'react'
import QuizResultProject from '../QuizResultProject';

const QuizResultProjects = ({ className }) => {
  return (
    <div className="quiz-projects">
      <div className="container">
        <div className="quiz-question-info">
          <h1 className="quiz-title">Essas são as vagas disponíveis</h1>
        </div>
        <div className="quiz-box">
          <div className="quiz-box-content">
            <QuizResultProject />
            <QuizResultProject />
            <QuizResultProject />
            <QuizResultProject />
          </div>
        </div>
      </div>
    </div>
  );
};

QuizResultProjects.displayName = 'QuizResultProjects';

export default QuizResultProjects;
