import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';

ReactDOM.render(
  <div>
    <Header/>
    <Routes/>
  </div>
  , document.getElementById('root'));
registerServiceWorker();
