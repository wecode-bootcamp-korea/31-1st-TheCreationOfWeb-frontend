import React from 'react';
import BoxData from './BoxData';
import './MyPage.scss';

const MyPage = () => {
  const CARD_LIST = [
    {
      id: 1,
      title: 'ORDER',
      content: '주문내역',
    },
    {
      id: 2,
      title: 'ORDER',
      content: '주문내역',
    },
    {
      id: 3,
      title: 'ORDER',
      content: '주문내역',
    },
    {
      id: 4,
      title: 'ORDER',
      content: '주문내역',
    },
    {
      id: 5,
      title: 'ORDER',
      content: '주문내역',
    },
    {
      id: 6,
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
        <div className="cardList">
          {CARD_LIST.map((cardList, idx) => (
            <BoxData
              key={cardList.id}
              idx={idx}
              title={cardList.title}
              content={cardList.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
