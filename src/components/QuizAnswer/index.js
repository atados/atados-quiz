import React from 'react'
import classNames from 'classnames';

const QuizAnswer = ({ label, image, onClick }) => {
  return (
    <div
      onClick={ onClick }
      className={ classNames("quiz-answer", {
        "quiz-image": !!image
      })}
      style={{ backgroundImage: `url(${image})`}}>
      <div className="quiz-label">{ label }</div>
      {
        !image
        ? <div className="quiz-answer-content">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quia nihil dolore amet</span>
          </div>
        : null
      }
    </div>
  );
};

QuizAnswer.displayName = 'QuizAnswer';

export default QuizAnswer;
