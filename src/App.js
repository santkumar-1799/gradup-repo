import React, { useState } from 'react';
import Page1 from './pages/page1';
import Page2 from './pages/page2';

import './App.css';

const GradUp = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const [buttonsVisible, setButtonsVisible] = useState(true);

  const handleButtonClick = (page) => {
    setButtonsVisible(false);
    setCurrentPage(page);
  };

  return (
    <div className="grad-up">
      {buttonsVisible && (
        <div>
          <button onClick={() => handleButtonClick('page1')}>Page 1</button>
          <button onClick={() => handleButtonClick('page2')}>Page 2</button>
        </div>
      )}
      {currentPage === 'page1' && <Page1 />}
      {currentPage === 'page2' && <Page2 />}
    </div>
  );
};

export default GradUp;
