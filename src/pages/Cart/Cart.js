import React, { useEffect, useState } from 'react';
import BlankCart from './BlankCart';
import ValidCart from './ValidCart';
import './Cart.scss';

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const isCartValid = carts.cart_list ? true : false;

  useEffect(() => {
    const token = localStorage.getItem('fruitz_user') || '';
    const API = 'http://10.58.1.198:8000/carts';
    const headers = {
      Authorization: token,
    };
    const getCartData = async () => {
      const response = await fetch(`${API}`, { headers });
      const cartData = await response.json();
      setCarts(cartData);
    };
    getCartData();
  }, [isCartValid]);

  return (
    <div className="Cart">
      {isCartValid ? (
        <ValidCart carts={carts.cart_list} totalPrice={carts.total_price} />
      ) : (
        <BlankCart />
      )}
    </div>
  );
};

export default Cart;
