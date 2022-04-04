/* eslint-disable */

import React, { createContext, useContext, useState, useEffect } from 'react';

export const FruitzProvider = ({ children }) => {
  const [productData, setProductData] = useState({
    mock: [],
  });

  const getData = async () => {
    const data = await fetch(
      'http://localhost:3000/data/initialData.json'
    ).then(res => res.json());
    setProductData({
      mock: data.data,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <FruitzStateContext.Provider value={{ data: productData.mock }}>
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
