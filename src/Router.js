import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useFruitzState } from './FruitContext';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import Fruit from './pages/Product/Fruit/Fruit';
import Beverage from './pages/Product/Beverage/Beverage';
import Detail from './pages/Product/Components/Detail/Detail';
import Goods from './pages/Product/Goods/Goods';
import Gifts from './pages/Product/Gifts/Gifts';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import MyPage from './pages/MyPage/MyPage';
import ScrollToTop from './ScrollToTop';

function Router() {
  const token = localStorage.getItem('fruitz_user');
  const [isLogin, setIsLogin] = useState(!!token);
  const productData = useFruitzState();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <Aside />
      <Routes>
        <Route path="/" element={<Main setIsLogin={setIsLogin} />} />
        <Route path="/member/join" element={<Join />} />
        <Route
          path="/member/login"
          element={<Login setIsLogin={setIsLogin} />}
        />
        <Route path="/product/:fruit" element={<Fruit />} />
        <Route
          path="/product/:fruit/detail/:id"
          element={<Detail productData={productData.data} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
