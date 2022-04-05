import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ListItem.scss';

const ListItem = ({
  idx,
  activeIndex,
  setActiveIndex,
  title,
  list,
  setIsOpenSubMenu,
  isOpenSubMenu,
}) => {
  const [subActiveIdx, setSubActiveIdx] = useState();
  const navigate = useNavigate();

  const handleClick = () => {
    setIsOpenSubMenu(true);
    setActiveIndex(idx);
    setSubActiveIdx(null);
    !list && navigate(`/${title.replace(' ', '').toLowerCase()}`);
  };

  const handleLink = (e, idx) => {
    setSubActiveIdx(idx);
    navigate({
      pathname: `/product/${e.target.innerText.replace(' ', '').toLowerCase()}`,
      state: {
        title: idx,
      },
    });
  };

  return (
    <li className="listLi">
      <div className="listTitle" onClick={handleClick}>
        {title}
      </div>
      <div className={idx === activeIndex ? '' : 'closed'}>
        {isOpenSubMenu &&
          list?.map((subList, index) => {
            return (
              <div
                key={index}
                onClick={subList => handleLink(subList, index)}
                className="listSub"
              >
                <div
                  className={
                    subActiveIdx === index
                      ? ['listDot', 'listActive'].join(' ')
                      : 'listDot'
                  }
                />
                {subList}
              </div>
            );
          })}
      </div>
    </li>
  );
};

export default ListItem;
