import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductItem.scss';

const ProductItem = ({ name, price, img_url, id }) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate({
      pathname: `detail/${id}`,
    });
  };
  return (
    <li className="productItem" onClick={goToDetail}>
      <img className="productImg" alt="fruitImg" src={img_url} />
      <div className="productContent">
        <h3 className="title">[프룯츠] {name}</h3>
        <p className="price">{price}</p>
      </div>
    </li>
  );
};

export default ProductItem;
