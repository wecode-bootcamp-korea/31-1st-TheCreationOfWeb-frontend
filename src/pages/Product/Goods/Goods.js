import React from 'react';
import { useFruitzState } from '../../../FruitContext';
import ProductList from '../Components/ProductList/ProductList';

const Goods = () => {
  const productData = useFruitzState();

  return (
    <section className="goods">
      <ProductList productData={productData} />
    </section>
  );
};

export default Goods;
