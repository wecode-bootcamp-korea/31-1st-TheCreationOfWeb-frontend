import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFruitzState } from '../../FruitContext';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import './ValidCart.scss';

const ValidCart = ({ cartItem, setCartItem, totalPrice, setIsCartValid }) => {
  const [checkedList, setCheckedList] = useState(cartItem);
  const [quantity, setQuantity] = useState('');
  const navigate = useNavigate();
  const productData = useFruitzState();
  const TITLE_LIST = ['ITEM', 'NAME', 'PRICE', 'QUANTITY', 'REMOVE'];
  const token = localStorage.getItem('fruitz_user') || '';
  const { id } = useParams();

  const removeCartAll = () => {
    if (window.confirm('장바구니를 비우시겠습니까?')) {
      fetch('http://10.58.1.146:8000/carts/cart', {
        method: 'DELETE',
        headers: {
          Authorization: token,
        },
        body: JSON.stringify({
          product_id: 0,
        }),
      }).then(res => res.json());
      setCartItem([]);
      setIsCartValid(false);
      window.scrollTo(0, 0);
    }
  };
  console.log(checkedList);
  return (
    <section className="validCart">
      <div className="cartContainer">
        <div className="cartTitle">
          <ul className="title">
            <li>
              <input className="chkBox" type="checkBox" />
            </li>
            {TITLE_LIST.map((list, i) => {
              return <li key={i}>{list}</li>;
            })}
          </ul>
        </div>
        <div className="cartContent">
          {cartItem?.map((cartData, idx) => {
            return (
              <CartItem
                key={id}
                {...cartData}
                cartItem={cartItem}
                cartData={cartData}
                setCartItem={setCartItem}
                idx={idx}
              />
            );
          })}
        </div>
        <div className="removeItem">
          <button className="removeBtn">선태상품 삭제</button>
          <button className="removeBtn" onClick={removeCartAll}>
            전체 삭제
          </button>
        </div>
      </div>
      <div className="cartSummary">
        <h1 className="summaryTitle">SHOPPING SUMMARY</h1>
        <CartSummary totalPrice={totalPrice} />
      </div>
    </section>
  );
};

export default ValidCart;
