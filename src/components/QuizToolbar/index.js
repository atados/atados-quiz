import React from 'react'
import Logo from './logo.png';

const QuizToolbar = () => {
  return (
    <div className="quiz-toolbar">
      <div className="quiz-statusbar"></div>
      <img src={Logo} alt=""/>
    </div>
  );
};

QuizToolbar.displayName = 'QuizToolbar';

export default QuizToolbar;
