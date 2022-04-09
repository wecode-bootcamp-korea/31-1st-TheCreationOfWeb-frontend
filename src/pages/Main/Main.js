import React from 'react';
import { useLoginState } from '../../LoginContext';
import Slider from './MainSection/MainSection';

import './Main.scss';

const Main = () => {
  const loginState = useLoginState();
  const { isLogin, setIsLogin } = loginState;
  if (localStorage.getItem('fruitz_user')) {
    setIsLogin(true);
  }

  return (
    <div>
      <Slider slides={IMAGE_DATA} />
    </div>
  );
};

export default Main;

const IMAGE_DATA = [
  {
    image: '/images/1.jpg',
  },
  {
    image: 'images/2.jpg',
  },
  {
    image: 'images/3.jpg',
  },
  {
    image: 'images/4.jpg',
  },
  {
    image: 'images/5.jpg',
  },
];
