import React from 'react';
import Header from './../main/header';
import Body from './../main/body';
import Footer from './../main/footer';

import './styles.css';

const Page1 = () => {
  return (
    <div className="page-container">
       <Header />  
       <Body />
       <Footer />

    </div>
  );
};

export default Page1;