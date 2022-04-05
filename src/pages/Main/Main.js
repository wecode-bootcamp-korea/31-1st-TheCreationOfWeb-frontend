import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from './MainSection/MainSection';
import Juice from './JuiceList/Juice';
import GoodsList from './GoodsList/GoodsList';
import Fruit from './Fruit/Fruit';
import Gift from './Gift/Gift';
import './Main.scss';

const Main = () => {
  const [goods, setGoods] = useState([]);
  const [juice, setJuice] = useState([]);
  const [gift, setGift] = useState([]);
  const [fruit, setFriut] = useState([]);
  const navigate = useNavigate();

  const pageChange = () => {
    navigate(`/member/join`);
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/Fruit.json')
      .then(res => res.json())
      .then(fruit => {
        setFriut(fruit);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/Goods.json')
      .then(res => res.json())
      .then(goods => {
        setGoods(goods);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/Gift.json')
      .then(res => res.json())
      .then(gift => {
        setGift(gift);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/Juice.json')
      .then(res => res.json())
      .then(juice => {
        setJuice(juice);
      });
  }, []);

  return (
    <div>
      <Slider slides={Image_Date} />
      <div className="mainList">
        <div className="oneHead">
          <div className="juiceHead">
            <span className="text">Juice</span>
            <span className="button">더보기</span>
          </div>
          <div className="fruitHead">
            <span className="text">Fruit</span>
            <span className="button">더보기</span>
          </div>
        </div>
        <div className="mainListOne">
          <ul className="mainJuiceList">
            {juice.map(juice => {
              return (
                <Juice
                  Key={juice.id}
                  pageChange={pageChange}
                  juiceSrc={juice.images}
                  juiceName={juice.name}
                />
              );
            })}
          </ul>

          <ul className="mainFruitList">
            {fruit.map(fruit => {
              return (
                <Fruit
                  Key={fruit.id}
                  fruitSrc={fruit.images}
                  fruitName={fruit.name}
                />
              );
            })}
          </ul>
        </div>
        <div className="twoHead">
          <div className="goodsHead">
            <span className="text">Goods</span>
            <span className="button">더보기</span>
          </div>
          <div className="giftHead">
            <span className="text">Gift</span>
            <span className="button">더보기</span>
          </div>
        </div>
        <div className="mainListTwo">
          <ul className="mainGoodsList">
            {goods.map(goods => {
              return (
                <GoodsList
                  Key={goods.id}
                  goodsSrc={goods.images}
                  goodsName={goods.name}
                />
              );
            })}
          </ul>
          <ul className="mainGiftList">
            {gift.map(gift => {
              return (
                <Gift
                  key={gift.id}
                  giftSrc={gift.images}
                  giftName={gift.name}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;

const Image_Date = [
  {
    image: '/images/1.jpg',
  },
  {
    image: 'images/2.jpg',
  },
  {
    image: 'images/3.jpg',
  },
  {
    image: 'images/4.jpg',
  },
  {
    image: 'images/5.jpg',
  },
];
