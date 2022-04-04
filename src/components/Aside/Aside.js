import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuList from './MenuList/MenuList';
import './Aside.scss';

const Aside = () => {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
  const navigate = useNavigate();
  const onRefresh = () => {
    navigate('/');
    setIsOpenSubMenu(false);
  };

  return (
    <section className="aside">
      <div className="asideTitle" onClick={onRefresh}>
        <img className="titleLogo" alt="logo" src="/images/logo.png" />
        <h3 className="titleName">프 룯 츠</h3>
      </div>
      <MenuList
        setIsOpenSubMenu={setIsOpenSubMenu}
        isOpenSubMenu={isOpenSubMenu}
      />
    </section>
  );
};

export default Aside;
