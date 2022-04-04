import React from 'react';
import './BoxData.scss';

const BoxData = ({ title, content }) => {
  return (
    <li className="contentsText">
      <div className="englishText">{title}</div>
      <div className="koreanText">{content}</div>
    </li>
  );
};

export default BoxData;
