import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useFruitzState } from '../../FruitContext';
import Slider from './MainSection/MainSection';
import ProductMainList from './ProductMainList/ProductMainList.js';
import GoodsList from './GoodsList/GoodsList';

export default function Main({ setIsLogin }) {
  const [juice, setJuice] = useState([]);
  const [good, setGood] = useState([]);
  const [] = useState([]);
  const [] = useState([]);
  const navigate = useNavigate();
  const productData = useFruitzState();

  console.log(productData);
  const product = () => {
    navigate(`/member/login`);
  };
  const goods = () => {
    navigate(`/member/join`);
  };

  if (localStorage.getItem('fruitz_user')) {
    setIsLogin(true);
  }
  // useEffect(() => {
  //   fetch('http://localhost:3000/data/Data.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setData(data);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch('http://localhost:3000/data/Good.json')
  //     .then(res => res.json())
  //     .then(good => {
  //       setGood(good);
  //     });
  // }, []);
  return (
    <div>
      <Slider slides={Image_Date} />
      <div className="MainList">
        <div className="titleListBox">
          <span className="productTitle">Product</span>
          <span className="navigate" onClick={product}>
            더보기
          </span>
        </div>

        <ul className="MainProductList">
          {productData.data.map(product => {
            return (
              <ProductMainList
                key={product}
                proudctKey={product.id}
                productSrc={product.img_url}
                productName={product.name}
              />
            );
          })}
        </ul>

        <div>
          <div className="titleListBox">
            <span className="MainGoodsTitle">Goods</span>
            <span className="navigate" onClick={goods}>
              더보기
            </span>
          </div>
        </div>

        <ul className="MainGoodsList">
          {productData.data.map(good => {
            return (
              <GoodsList
                key={good}
                goodKey={good.id}
                goodSrc={good.img_url}
                goodName={good.name}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

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
