import React from 'react'
import classNames from 'classnames';

const QuizAlternative = ({ label, image, onClick }) => {
  return (
    <div
      onClick={ onClick }
      className={ classNames("quiz-alternative", {
        "quiz-image": !!image
      })}
      style={{ backgroundImage: `url(${image})`}}>
      <div className="quiz-label">{ label }</div>
      {
        !image
        ? <div className="quiz-alternative-content">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quia nihil dolore amet</span>
          </div>
        : null
      }
    </div>
  );
};

QuizAlternative.displayName = 'QuizAlternative';

export default QuizAlternative;
