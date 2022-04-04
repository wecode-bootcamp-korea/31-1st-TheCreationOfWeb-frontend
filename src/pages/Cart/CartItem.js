import Reac, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import './CartItem.scss';

const CartItem = ({
  quantity,
  item,
  name,
  price,
  cartItem,
  cartData,
  setCartItem,
}) => {
  const [quanInput, setQuanInput] = useState(quantity);
  const [count, setCount] = useState(quantity);
  console.log('cart 카운트:', count);
  const countUp = e => {
    setCount(prevCount => prevCount + 1);
    setQuanInput(count + 1);
  };

  const countDown = e => {
    if (count < 2) {
      alert('최소 주문수량은 1개입니다.');
      return;
    }
    setCount(prevCount => prevCount - 1);
    setQuanInput(count - 1);
  };

  const quantityInput = e => {
    setQuanInput(parseInt(e.target.value));
    setCount(parseInt(e.target.value));
  };

  const deleteItem = e => {
    const copyCartItem = [...cartItem];
    const filteredCartItem = copyCartItem.filter(
      item => item.id !== cartData.id
    );
    setCartItem(filteredCartItem);
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
          name=""
          id=""
          value={quanInput}
          onChange={quantityInput}
        />
        <button className="countBtn">
          <img
            src="https://fritz.co.kr/img/btn_quantity_up.gif"
            onClick={countUp}
          />
        </button>
        <button className="countBtn">
          <img
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
