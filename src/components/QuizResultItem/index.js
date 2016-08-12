import React from 'react';

const QuizResultItem = ({ name, image }) => {
  return (
    <div className="quiz-result-item quiz-image" style={{ backgroundImage: `url(${image})`}}>
      <h2 className="quiz-result-item-text">{name}</h2>
    </div>
  );
};

QuizResultItem.displayName = 'QuizResultItem';

export default QuizResultItem;
