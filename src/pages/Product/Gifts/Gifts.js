import React from 'react';
import { useFruitzState } from '../../../FruitContext';
import ProductList from '../Components/ProductList/ProductList';

const Gifts = () => {
  const productData = useFruitzState();

  return (
    <section className="gifts">
      <ProductList productData={productData} />
    </section>
  );
};

export default Gifts;
