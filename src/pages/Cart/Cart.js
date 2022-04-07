import React, { useEffect, useState } from 'react';
import BlankCart from './BlankCart';
import ValidCart from './ValidCart';
import './Cart.scss';

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const isCartValid = carts.cart_list ? true : false;
  const token = localStorage.getItem('fruitz_user') || '';
  const API = 'http://10.58.4.182:8000/carts';
  const headers = {
    Authorization: token,
  };

  const getCartData = async () => {
    const response = await fetch(`${API}`, { headers });
    const cartData = await response.json();
    setCarts(cartData);
  };

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <div className="Cart">
      {!isCartValid.length === -1 ? (
        <ValidCart
          carts={carts.cart_list}
          totalPrice={carts.total_price}
          getCartData={getCartData}
        />
      ) : (
        <BlankCart />
      )}
    </div>
  );
};

export default Cart;
