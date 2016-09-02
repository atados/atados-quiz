import React from 'react';

const QuizResultProject = ({ name, nonprofit_name, slug, volunteers_numbers, nonprofit_image, city_state, image, small_image_url }) => {
  return (
    <a href={"//atados.com.br/vaga/" + slug } className="quiz-project">
      <div className="quiz-project-cover quiz-image" style={{ backgroundImage: `url(${small_image_url})` }}>
        <h4 className="quiz-project-vacancy">{ name }</h4>
      </div>
      <div className="quiz-project-info">
        <div className="quiz-project-owner quiz-image" style={{ backgroundImage: `url(${nonprofit_image})` }}></div>
        <h4 className="quiz-project-owner-name">{ nonprofit_name }</h4>
        <span className="quiz-project-address">
          <i className="fa fa-map-marker"></i>
          { city_state }
        </span>
      </div>
      <div className="quiz-project-footer">
        <span>
          <i className="fa fa-refresh"></i>
          Vaga Recorrente
        </span>
        <span className="pull-right">
          <i className="fa fa-user"></i>
          { volunteers_numbers }
        </span>
      </div>
    </a>
  );
};

QuizResultProject.displayName = 'QuizResultProject';
export default QuizResultProject;
