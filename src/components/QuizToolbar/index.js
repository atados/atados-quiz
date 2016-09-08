import React from 'react'
import Logo from './logo.png';

const QuizToolbar = ({ onLogoClick, showLogo  }) => {
  return (
    <div className="quiz-toolbar">
      <div className="quiz-statusbar"></div>
      { showLogo
        ? <img onClick={ onLogoClick } src={Logo} alt=""/>
        : null
      }
    </div>
  );
};

QuizToolbar.displayName = 'QuizToolbar';

export default QuizToolbar;
