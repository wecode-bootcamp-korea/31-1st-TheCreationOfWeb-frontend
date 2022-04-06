import React from 'react';
import './DetailInfo.scss';

const DetailInfo = () => {
  return (
    <div className="detailInfo">
      <ul className="infoList">
        <li>품명:</li>
        <li>원산지:</li>
        <li>용량:</li>
        <li>설명:</li>
      </ul>
    </div>
  );
};

export default DetailInfo;
