import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFruitzState } from '../../../FruitContext';
import ProductList from '../Components/ProductList/ProductList';

const Beverage = () => {
  const [searchParams] = useSearchParams();
  const beverage = searchParams.get('detail') === 'true';
  const productData = useFruitzState();
  console.log('쿼리 확인:', beverage);
  return (
    <section className="Beverage">
      <ProductList productData={productData} />
    </section>
  );
};

export default Beverage;
