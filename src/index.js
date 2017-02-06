import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Greeting from './components/greeting';
import Content from './components/content';
import Footer from './components/footer';

import './index.css';

const App = function() {
  return (
    <div>
      <Greeting />
      <Content />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
