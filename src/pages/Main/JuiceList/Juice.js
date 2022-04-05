import React from 'react';
import './Juice.scss';

const Juice = ({ Key, pageChange, juiceSrc, juiceName }) => {
  return (
    <div>
      <ul>
        <li key={Key} className="juice">
          <img className="juiceImg" src={juiceSrc} alt="" />
          <h3 className="juiceText">{juiceName}</h3>
        </li>
      </ul>
    </div>
  );
};

export default Juice;
