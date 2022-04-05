import React, { useState } from 'react';

import ListItem from './ListItem';
import './MenuList';
import './MenuList.scss';

const AsideMenu = ({ setIsOpenSubMenu, isOpenSubMenu }) => {
  const [activeIndex, setActiveIndex] = useState();

  return (
    <ul className="menuList">
      {MENU_LIST.map((menuList, idx) => {
        return (
          <ListItem
            key={idx}
            idx={idx}
            {...menuList}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            setIsOpenSubMenu={setIsOpenSubMenu}
            isOpenSubMenu={isOpenSubMenu}
          />
        );
      })}
    </ul>
  );
};

export default AsideMenu;

const MENU_LIST = [
  { title: 'ABOUT', list: ['DIRECT TRADE', 'TEAM MEMBER'] },
  { title: 'SHOP', list: ['FRUIT', 'BEVERAGE', 'GOODS', 'GIFTS'] },
  { title: 'FRUITZ CLUB' },
  { title: 'WHOLESALE', list: ['ABOUT FRUITZ', 'NOTICE / Q&A'] },
  { title: 'CONTACT' },
];
