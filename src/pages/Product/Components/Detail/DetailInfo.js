import React from 'react';
import './DetailInfo.scss';

const DetailInfo = ({ volume, origin, name, summary }) => {
  return (
    <div className="detailInfo">
      <ul className="infoList">
        <li>품명 : {name}</li>
        <li>원산지 : {origin}</li>
        <li>용량 : {volume}</li>
        <li>설명 : {summary}</li>
      </ul>
    </div>
  );
};

export default DetailInfo;
