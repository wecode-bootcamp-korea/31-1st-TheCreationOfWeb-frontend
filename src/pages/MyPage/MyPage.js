import React, { useState, useEffect } from 'react';
import BoxData from './BoxData';
import './MyPage.scss';

const MyPage = () => {
  const CARD_LIST = [
    {
      title: 'ORDER',
      content: '주문내역',
    },
    {
      title: 'ORDER',
      content: '주문내역',
    },
    {
      title: 'ORDER',
      content: '주문내역',
    },
    {
      title: 'ORDER',
      content: '주문내역',
    },
    {
      title: 'ORDER',
      content: '주문내역',
    },
    {
      title: 'ORDER',
      content: '주문내역',
    },
  ];

  return (
    <div className="Mypage">
      <div className="container">
        <div>
          <ul className="textGroup">
            <li>
              <span>가용적립금 </span>
            </li>
            <li>
              <span className="savedMoney">0원 조회</span>
            </li>
          </ul>
        </div>
        <ul className="cardList">
          {CARD_LIST.map((cardList, i) => {
            return <BoxData key={i} {...cardList} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default MyPage;
