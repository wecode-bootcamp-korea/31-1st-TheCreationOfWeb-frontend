import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartModal from '../../../Cart/components/CartModal/CartModal';
import './DetailBtn.scss';

const DetailBtn = ({ count, price, id }) => {
  const [isOpenCartModal, setIsOpenCartModal] = useState(false);
  const navigate = useNavigate();

  const randomNum = Math.floor(Math.random() * 300);

  const addCart = () => {
    const body = JSON.stringify({
      user: '1',
      product: id,
      quantity: count,
      price: price,
    });

    fetch('', {
      method: 'POST',
      body,
    }).then(res => console.log(res));
    setIsOpenCartModal(true);
  };

  const goBack = () => {
    navigate(-1);
  };

  const addWishList = () => {
    alert('죄송합니다. 서비스 준비중입니다.');
  };

  return (
    <div className="detailBtn">
      {isOpenCartModal && <CartModal setIsOpenCartModal={setIsOpenCartModal} />}
      <h3 className="detailLook">이 상품을 {randomNum}명이 보고있습니다.</h3>
      <div className="detailBtnSet">
        <button className="buyBtn">BUY NOW</button>
        <button className="addCartBtn" onClick={addCart}>
          ADD TO CART
        </button>
        <button className="wishListBtn" onClick={addWishList}>
          WISH LIST
        </button>
      </div>
      <button className="backBtn" onClick={goBack}>
        뒤로가기
      </button>
    </div>
  );
};

export default DetailBtn;
