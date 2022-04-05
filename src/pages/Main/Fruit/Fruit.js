import React from 'react';
import './Fruit.scss';

const Fruit = ({ Key, fruitSrc, fruitName }) => {
  return (
    <div>
      <li key={Key} className="fruit">
        <img className="fruitImg" src={fruitSrc} alt="" />
        <h3 className="fruitText">{fruitName}</h3>
      </li>
    </div>
  );
};

export default Fruit;
