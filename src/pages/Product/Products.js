import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductList from './Components/ProductList/ProductList';

const Products = () => {
  const [product, setProduct] = useState([]);
  const location = useLocation();

  const fetchData = () => {
    async function fetchSetProducts() {
      const response = await fetch(
        `http://10.58.4.182:8000/products${location.search}`
      );
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
