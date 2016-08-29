import React from 'react'
import classNames from 'classnames';

const QuizAlternative = ({ label, image, text, onClick }) => {
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
            <span>{ text }</span>
          </div>
        : null
      }
    </div>
  );
};

QuizAlternative.displayName = 'QuizAlternative';

export default QuizAlternative;
