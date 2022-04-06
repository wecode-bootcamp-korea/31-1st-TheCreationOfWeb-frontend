import React from 'react';
import './DetailSelect.scss';

const DetailSelect = ({ count, setCount }) => {
  const onCountUp = () => {
    setCount(prevCount => prevCount + 1);
  };

  const onCountDown = () => {
    if (count < 2) {
      alert('최소 주문수량은 1개입니다.');
      return;
    }
    setCount(prevCount => prevCount - 1);
  };

  const inputHandler = e => {
    setCount(parseInt(e.target.value));
  };

  return (
    <div className="detailSelect">
      <span className="selectName">QUANTITY</span>
      <input
        className="selectInput"
        type="text"
        value={count}
        onChange={inputHandler}
      />
      <button className="selectBtn" onClick={onCountUp}>
        <img
          alt="upArrowImg"
          src="https://fritz.co.kr/img/btn_quantity_up.gif"
        />
      </button>
      <button className="selectBtn" onClick={onCountDown}>
        <img
          alt="downArrowImg"
          src="https://fritz.co.kr/img/btn_quantity_down.gif"
        />
      </button>
    </div>
  );
};

export default DetailSelect;
