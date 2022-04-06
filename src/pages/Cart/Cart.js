import React, { useEffect, useState } from 'react';
import BlankCart from './BlankCart';
import ValidCart from './ValidCart';
import './Cart.scss';

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const isCartValid = carts.cart_list ? true : false;

  useEffect(() => {
    const MOCK_CART = 'data/cartData.json';
    const API = 'http://10.58.1.198:8000/carts';

    const getCartData = async () => {
      const response = await fetch(``);
      const cartData = await response.json();
      setCarts(cartData);
    };
    getCartData();
  }, []);

  return (
    <div className="Cart">
      {isCartValid ? (
        <ValidCart
          carts={carts.cart_list}
          setCarts={setCarts}
          totalPrice={carts.total_price}
        />
      ) : (
        <BlankCart />
      )}
    </div>
  );
};

export default Cart;
