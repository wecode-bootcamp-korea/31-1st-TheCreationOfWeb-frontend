import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductItem.scss';

const ProductItem = ({ name, price, images, id }) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate({
      pathname: `detail/${id}`,
    });
  };
  return (
    <li className="productItem" onClick={goToDetail}>
      <img className="productImg" alt="fruitImg" src={images[1]} />
      <div className="productContent">
        <h3 className="title">[프룯츠] {name}</h3>
        <p className="price">{price}</p>
      </div>
    </li>
  );
};

export default ProductItem;
