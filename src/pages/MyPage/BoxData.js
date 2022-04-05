import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BoxData.scss';

const BoxData = ({ title, content, idx }) => {
  const navigate = useNavigate();
  const goToPage = () => {
    if (idx === 0) {
      navigate('/');
    } else if (idx === 1) {
      navigate('/member/profile');
    } else if (idx === 2) {
      navigate('/');
    } else if (idx === 3) {
      navigate('/');
    } else if (idx === 4) {
      navigate('/');
    } else if (idx === 5) {
      navigate('/');
    }
  };

  return (
    <div className="contentsText" onClick={goToPage}>
      <div className="englishText">{title}</div>
      <div className="koreanText">{content}</div>
    </div>
  );
};

export default BoxData;
