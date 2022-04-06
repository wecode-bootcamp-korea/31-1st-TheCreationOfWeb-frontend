import React from 'react';
import { useFruitzState } from '../../FruitContext';
import ProductList from './Components/ProductList/ProductList';

const Products = () => {
  const product = useFruitzState();

  return (
    <section className="products">
      <ProductList product={product.data} />
    </section>
  );
};

export default Products;
