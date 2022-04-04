import React from 'react';
import { useFruitzState } from '../../../FruitContext';
import ProductList from '../Components/ProductList/ProductList';

const Fruit = () => {
  const productData = useFruitzState();
  console.log('프로덕트 확인:', productData.data);
  return (
    <section className="Fruit">
      <ProductList productData={productData} />
    </section>
  );
};

export default Fruit;
