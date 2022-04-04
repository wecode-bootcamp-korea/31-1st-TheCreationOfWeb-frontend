import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFruitzState } from '../../../../FruitContext';
import DetailInfo from './DetailInfo';
import DetailSelect from './DetailSelect';
import DetailBtn from './DetailBtn';
import './Detail.scss';

const Detail = () => {
  const [count, setCount] = useState(1);
  const [input, setInput] = useState(1);
  const [detailTabs, setDetailTabs] = useState(0);
  const productData = useFruitzState();
  const { id } = useParams();
  const { name, price, images } = productData.data[id - 1];
  return (
    <section className="detail">
      <div className="detailContent">
        <img className="img" alt="productImg" src={images[1]} />
        <p className="content">
          간편함과 퀄리티를 동시에!
          <br /> 프릳츠에서 만드는 간편 커피 시리즈
          <br /> 편리한데 맛까지 훌륭합니다.
        </p>
      </div>
      <div className="detailAside">
        <div className="title">
          <h3 className="asideTitle">[프릳츠] {name}</h3>
          <h3 className="asidePrice">{price}</h3>
        </div>
        <ul className="asideTabs">
          {TAB_LIST.map((tabsName, idx) => {
            return (
              <li
                className={detailTabs === idx ? 'tabsActive' : ''}
                key={idx}
                onClick={() => {
                  setDetailTabs(idx);
                }}
              >
                {tabsName}
              </li>
            );
          })}
        </ul>
        {detailTabs === 0 && <DetailInfo />}
        <div className="purchase">
          <DetailSelect
            count={count}
            setCount={setCount}
            input={input}
            setInput={setInput}
          />
          <DetailBtn count={count} price={price} id={id} />
        </div>
      </div>
    </section>
  );
};

export default Detail;

const TAB_LIST = ['DETAILS', '|', 'HOW TO USE'];
