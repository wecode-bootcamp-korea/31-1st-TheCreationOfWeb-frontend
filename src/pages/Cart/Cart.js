/* eslint-disable */
import React, { useEffect, useState } from 'react';
import BlankCart from './BlankCart';
import ValidCart from './ValidCart';
import './Cart.scss';

const Cart = () => {
  const [isCartValid, setIsCartValid] = useState(false);
  const [carts, setCarts] = useState([]);
  const token = localStorage.getItem('fruitz_user') || '';

  useEffect(() => {
    const API_CART = 'http://10.58.1.146:8000/carts/cart';
    // const getCartData = await fetch(`${API_CART}`, {
    //   method: 'GET',
    //   headers: {
    //     Authorization: token,
    //   },
    // }).then(res => res.json());
    // console.log(getCartData.cart_list);

    const MOCK_CART = 'data/cartData.json';

    const getCartData = async () => {
      const response = await fetch(`${MOCK_CART}`);
      const cartData = await response.json();
      setCarts(cartData);
    };
    getCartData();
    setIsCartValid(true);
  }, []);

  return (
    <div className="Cart">
      {isCartValid ? (
        <ValidCart
          carts={carts.cart_list}
          setCarts={setCarts}
          totalPrice={carts.total_price}
          setIsCartValid={setIsCartValid}
        />
      ) : (
        <BlankCart />
      )}
    </div>
  );
};

export default Cart;
