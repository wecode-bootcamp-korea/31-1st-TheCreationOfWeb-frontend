/* eslint-disable */
import React, { useEffect, useState } from 'react';
import BlankCart from './BlankCart';
import ValidCart from './ValidCart';
import './Cart.scss';

const Cart = () => {
  const [isCartValid, setIsCartValid] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const token = localStorage.getItem('fruitz_user') || '';
  useEffect(async () => {
    // const getCartData = await fetch('http://10.58.1.146:8000/carts/cart', {
    //   method: 'GET',
    //   headers: {
    //     Authorization: token,
    //   },
    // }).then(res => res.json());
    // console.log(getCartData.cart_list);

    const getCartData = await fetch(
      'http://localhost:3000/data/cartData.json'
    ).then(res => res.json());
    console.log(getCartData.cart_list);

    setCartItem(getCartData);
    // console.log(getCartData);

    getCartData.cart_list.length ? setIsCartValid(true) : setIsCartValid(false);
  }, []);
  console.log('cart.js:', cartItem.cart_list);

  return (
    <div className="Cart">
      {isCartValid ? (
        <ValidCart
          cartItem={cartItem.cart_list}
          setCartItem={setCartItem}
          totalPrice={cartItem.total_price}
          setIsCartValid={setIsCartValid}
        />
      ) : (
        <BlankCart />
      )}
    </div>
  );
};

export default Cart;
