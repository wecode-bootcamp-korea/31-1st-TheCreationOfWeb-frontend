import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.scss';

const ProductList = ({ productData }) => {
  return (
    <ul className="productList">
      {productData.data.map(productList => {
        console.log(productList);
        return <ProductItem key={productList.id} {...productList} />;
      })}
    </ul>
  );
};

export default ProductList;
