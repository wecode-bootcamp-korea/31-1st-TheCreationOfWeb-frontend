import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BoxData.scss';

const BoxData = ({ title, content, url }) => {
  const navigate = useNavigate();
  const goToPage = () => {
    navigate(url);
    alert('아직 준비중입니다.');
  };

  return (
    <div className="contentsText" onClick={goToPage}>
      <div className="englishText">{title}</div>
      <div className="koreanText">{content}</div>
    </div>
  );
};

export default BoxData;
