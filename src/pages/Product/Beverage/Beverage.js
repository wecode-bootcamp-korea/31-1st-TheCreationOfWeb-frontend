import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFruitzState } from '../../../FruitContext';
import ProductList from '../Components/ProductList/ProductList';

const Beverage = () => {
  const productData = useFruitzState();

  return (
    <section className="Beverage">
      <ProductList productData={productData} />
    </section>
  );
};

export default Beverage;
