import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductList from './Components/ProductList/ProductList';
import { BASE_URL } from '../../config';

const Products = () => {
  const [product, setProduct] = useState([]);
  const location = useLocation();

  const fetchData = () => {
    async function fetchSetProducts() {
      const response = await fetch(`${BASE_URL}products${location.search}`);
      const data = await response.json();
      setProduct(data.product_list);
    }
    fetchSetProducts();
  };

  useEffect(() => {
    fetchData();
  }, [location.search]);

  return (
    <section className="products">
      {product && <ProductList product={product} />}
    </section>
  );
};

export default Products;
