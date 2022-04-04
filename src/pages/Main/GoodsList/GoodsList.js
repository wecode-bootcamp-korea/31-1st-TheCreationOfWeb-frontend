import React from 'react';
import './GoodsList.scss';

const GoodsList = ({ goodKey, goodSrc, goodName }) => {
  return (
    <div>
      <div key={goodKey} className="goodsList">
        <img className="goodsImg" src={goodSrc} alt="" />
        <div className="goodsText">{goodName}</div>
      </div>
    </div>
  );
};

export default GoodsList;
