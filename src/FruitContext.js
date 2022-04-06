import React, { createContext, useContext, useState, useEffect } from 'react';

export const FruitzProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const API_URL = '/data/initialData.json';

  const getProductsData = async () => {
    const response = await fetch(`${API_URL}`);
    const productsResData = await response.json();

    setProducts(productsResData.data);
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <FruitzStateContext.Provider value={products}>
      {children}
    </FruitzStateContext.Provider>
  );
};

const FruitzStateContext = createContext();

export const useFruitzState = () => {
  const context = useContext(FruitzStateContext);
  if (!context) {
    throw new Error('Provider를 찾을 수 없습니다.');
  }
  return context;
};
