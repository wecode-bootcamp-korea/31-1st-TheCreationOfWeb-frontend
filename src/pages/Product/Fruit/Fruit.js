import React from 'react';
import { useFruitzState } from '../../../FruitContext';
import ProductList from '../Components/ProductList/ProductList';

const Fruit = () => {
  const productData = useFruitzState();
  return (
    <section className="Fruit">
      <ProductList productData={productData} />
    </section>
  );
};

export default Fruit;
