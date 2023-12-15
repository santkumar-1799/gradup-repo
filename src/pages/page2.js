import React from 'react';
import Header from './../main/header';
import Body from './../page2/body';
import Footer from './../main/footer';

import './styles.css';

const Page2 = () => {
  return (
    <div className="page-container">
      <Header />  
       <Body />
       <Footer />

    </div>
  );
};

export default Page2;