import React, { createContext, useContext, useState, useEffect } from 'react';

export const FruitzProvider = ({ children }) => {
  const [dataValue, setDataValue] = useState({
    mock: [],
    product: [],
  });

  const API_URL = '/data/initialData.json';

  const getData = async () => {
    const response = await fetch(`${API_URL}`);
    const mockData = await response.json();

    setDataValue({
      mock: mockData.data,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <FruitzStateContext.Provider value={{ data: dataValue.mock }}>
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
