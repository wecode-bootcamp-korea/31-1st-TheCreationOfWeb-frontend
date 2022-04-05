import React from 'react';
import './GoodsList.scss';

const GoodsList = ({ Key, goodsSrc, goodsName }) => {
  return (
    <div>
      <div key={Key} className="goodsList">
        <img className="goodsImg" src={goodsSrc} alt="" />
        <div className="goodsText">{goodsName}</div>
      </div>
    </div>
  );
};

export default GoodsList;
