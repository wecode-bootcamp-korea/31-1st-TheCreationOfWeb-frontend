import React from 'react';
import './ProductMainList.scss';

const ProductMainList = ({ proudctKey, productSrc, productName }) => {
  return (
    <li key={proudctKey} className="List">
      <img className="productImg" src={productSrc} alt="" />
      <h3 className="productText">{productName}</h3>
    </li>
  );
};

export default ProductMainList;
