import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { FruitzProvider } from './FruitContext';
import { LoginProvider } from './LoginContext';
import './styles/reset.scss';
import './styles/common.scss';

ReactDOM.render(
  <FruitzProvider>
    <LoginProvider>
      <Router />
    </LoginProvider>
  </FruitzProvider>,
  document.getElementById('root')
);
