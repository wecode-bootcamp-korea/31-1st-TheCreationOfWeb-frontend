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
    image: '/images/main1.jpg',
  },
  {
    image: '/images/main2.jpg',
  },
  {
    image: '/images/main3.jpg',
  },
  {
    image: '/images/main4.jpg',
  },
  {
    image: '/images/main5.jpg',
  },
];
