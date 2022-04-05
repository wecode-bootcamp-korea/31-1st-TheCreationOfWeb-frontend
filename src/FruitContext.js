import React, { createContext, useContext, useState, useEffect } from 'react';

export const FruitzProvider = ({ children }) => {
  const token = localStorage.getItem('fruitz_user');
  const [isLogin, setIsLogin] = useState(!!token);
  const [dataValue, setDataValue] = useState({
    mock: [],
    product: [],
  });

  const loginValue = { isLogin, setIsLogin };
  const MOCK_URL = '/data/initialData.json';
  const API_URL = 'http://10.58.4.8:8000/products?category_id=1';

  const getData = async () => {
    const response = await fetch(`${MOCK_URL}`);
    const mockData = await response.json();


    setDataValue({
      mock: mockData.data,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <FruitzStateContext.Provider
      value={{ data: dataValue.mock, loginInfo: loginValue }}
    >
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
