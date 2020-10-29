import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss'

import Home from './views/Home';
import AsideLeft from './components/AsideLeft';


ReactDOM.render(
  <React.StrictMode>
    <AsideLeft />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
