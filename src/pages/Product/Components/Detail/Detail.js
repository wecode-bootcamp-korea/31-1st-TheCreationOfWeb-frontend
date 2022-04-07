import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailInfo from './DetailInfo';
import DetailSelect from './DetailSelect';
import DetailBtn from './DetailBtn';
import './Detail.scss';

const Detail = () => {
  const [count, setCount] = useState(1);
  const [detailTabs, setDetailTabs] = useState(0);
  const [detailProduct, setDetailProduct] = useState([]);
  const { id } = useParams();
  const { name, description, price } = detailProduct;

  const fetchData = () => {
    async function fetchSetDetail() {
      const response = await fetch(`http://10.58.4.182:8000/products/${id}`);
      const data = await response.json();
      setDetailProduct(data.product_detail);
    }
    fetchSetDetail();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="detail">
      {detailProduct.name && (
        <>
          <div className="detailContent">
            <img
              className="img"
              alt="productImg"
              src={detailProduct.images[0]}
            />
            <p className="content">{description}</p>
          </div>
          <div className="detailAside">
            <div className="title">
              <h3 className="asideTitle">[프룯츠] {name}</h3>
              <h3 className="asidePrice">KRW {Math.floor(price)}</h3>
            </div>
            <ul className="asideTabs">
              {TAB_LIST.map((tabsTitle, idx) => {
                return (
                  <li
                    className={detailTabs === idx ? 'tabsActive' : ''}
                    key={idx}
                    onClick={() => {
                      setDetailTabs(idx);
                    }}
                  >
                    {tabsTitle}
                  </li>
                );
              })}
            </ul>
            {detailTabs === 0 && <DetailInfo {...detailProduct} />}
            <div className="purchase">
              <DetailSelect count={count} setCount={setCount} />
              <DetailBtn count={count} price={detailProduct.price} id={id} />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Detail;

const TAB_LIST = ['DETAILS', '|', 'HOW TO USE'];
