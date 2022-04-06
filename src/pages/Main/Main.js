import React from 'react';

import Slider from './MainSection/MainSection';

import './Main.scss';

const Main = () => {
  return (
    <div>
      <Slider slides={Image_Date} />
    </div>
  );
};

export default Main;

const Image_Date = [
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
