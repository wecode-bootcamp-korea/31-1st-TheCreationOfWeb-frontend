import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import Detail from './pages/Product/Components/Detail/Detail';
import Products from './pages/Product/Products';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Cart from './pages/Cart/Cart';
// import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import MyPage from './pages/MyPage/MyPage';
import ScrollToTop from './ScrollToTop';

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Aside />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/member/join" element={<Join />} />
        <Route path="/member/login" element={<Login />} />
        <Route path="/product/:fruit" element={<Products />} />
        <Route path="/product/:fruit/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mypage" element={<MyPage />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/member/mypage" element={<MyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
