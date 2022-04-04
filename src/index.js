import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { FruitzProvider } from './FruitContext';
import './styles/reset.scss';
import './styles/common.scss';

ReactDOM.render(
  <FruitzProvider>
    <Router />
  </FruitzProvider>,
  document.getElementById('root')
);
