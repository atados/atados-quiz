import React from 'react'
import Logo from './logo.png';

const QuizToolbar = ({ onLogoClick  }) => {
  return (
    <div className="quiz-toolbar">
      <div className="quiz-statusbar"></div>
      <img onClick={ onLogoClick } src={Logo} alt=""/>
    </div>
  );
};

QuizToolbar.displayName = 'QuizToolbar';

export default QuizToolbar;
