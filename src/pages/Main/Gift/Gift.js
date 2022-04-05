import React from 'react';
import './Gift.scss';

const Gift = ({ Key, giftSrc, giftName }) => {
  return (
    <div>
      <li key={Key} className="gift">
        <img className="giftImg" src={giftSrc} alt="" />
        <h3 className="giftText">{giftName}</h3>
      </li>
    </div>
  );
};

export default Gift;
