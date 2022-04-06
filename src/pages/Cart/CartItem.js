import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import './CartItem.scss';

const CartItem = ({ item, name, price, carts, setCarts, idx }) => {
  const [count, setCount] = useState(1);

  const countUp = () => {
    setCount(prevCount => prevCount + 1);
  };

  const countDown = () => {
    if (count < 2) {
      alert('최소 주문수량은 1개입니다.');
      return;
    }
    setCount(prevCount => prevCount - 1);
  };

  const inputHandler = e => {
    setCount(parseInt(e.target.value));
  };

  const deleteItem = () => {
    // TODO : 카트 아이템 개별 삭제 구현 할것
    const copyCartItem = [...carts];
    const filteredCartItem = copyCartItem.filter(item => item.id !== idx);
    setCarts(filteredCartItem);
  };
  return (
    <ul className="cartItem">
      <li>
        <input className="chkBox" type="checkBox" />
      </li>
      <li>
        <img className="cartImg" src={item} alt="product_img" />
      </li>
      <li className="cartName">{name}</li>
      <li className="cartPrice">{price}</li>
      <li className="cartInput">
        <input
          className="quantity"
          type="text"
          value={count}
          onChange={inputHandler}
        />
        <button className="countBtn">
          <img
            alt="upArrowImg"
            src="https://fritz.co.kr/img/btn_quantity_up.gif"
            onClick={countUp}
          />
        </button>
        <button className="countBtn">
          <img
            alt="downArrowImg"
            src="https://fritz.co.kr/img/btn_quantity_down.gif"
            onClick={countDown}
          />
        </button>
      </li>
      <li className="removeCart">
        <FiX className="removeIcon" onClick={deleteItem} />
      </li>
    </ul>
  );
};

export default CartItem;
