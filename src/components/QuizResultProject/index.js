import React from 'react';

const QuizResultProject = ({ image }) => {
  return (
    <a href="" className="quiz-project">
      <div className="quiz-project-cover quiz-image">
        <h4 className="quiz-project-vacancy">Nutricionista</h4>
      </div>
      <div className="quiz-project-info">
        <div className="quiz-project-owner quiz-image"></div>
        <h4 className="quiz-project-owner-name">Grupo vida - Brasil</h4>
        <span className="quiz-project-address">
          <i className="fa fa-map-marker"></i>
          Barueri, SP
        </span>
      </div>
      <div className="quiz-project-footer">
        <span>
          <i className="fa fa-refresh"></i>
          Vaga Recorrente
        </span>
        <span className="pull-right">
          <i className="fa fa-user"></i>
          13
        </span>
      </div>
    </a>
  );
};

QuizResultProject.displayName = 'QuizResultProject';
export default QuizResultProject;
