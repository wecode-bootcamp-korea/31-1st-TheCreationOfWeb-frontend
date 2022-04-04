import React, { useState } from 'react';
import './DetailSelect.scss';

const DetailSelect = ({ count, setCount, input, setInput }) => {
  const onCountUp = () => {
    setCount(prevCount => prevCount + 1);
    setInput(count + 1);
  };

  const onCountDown = () => {
    if (count < 2) {
      alert('최소 주문수량은 1개입니다.');
      return;
    }
    setCount(prevCount => prevCount - 1);
    setInput(count - 1);
  };

  const inputHandler = e => {
    setInput(parseInt(e.target.value));
    setCount(parseInt(e.target.value));
  };

  return (
    <div className="detailSelect">
      <span className="selectName">QUANTITY</span>
      <input
        className="selectInput"
        type="text"
        value={input}
        onChange={inputHandler}
      />
      <button className="selectBtn" onClick={onCountUp}>
        <img src="https://fritz.co.kr/img/btn_quantity_up.gif" />
      </button>
      <button className="selectBtn" onClick={onCountDown}>
        <img src="https://fritz.co.kr/img/btn_quantity_down.gif" />
      </button>
    </div>
  );
};

export default DetailSelect;
