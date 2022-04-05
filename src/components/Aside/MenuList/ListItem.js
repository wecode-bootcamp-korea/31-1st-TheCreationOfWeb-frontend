import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
    // !list && navigate(`products?category_id=1&product_id=1`);
  };

  const handleLink = (e, idx) => {
    setSubActiveIdx(idx);

    navigate({
      pathname: `/product/${e.target.innerText.replace(' ', '').toLowerCase()}`,
    });
  };

  return (
    <li className="listLi">
      <div className="listTitle" onClick={handleClick}>
        {title}
      </div>
      <div className={idx === activeIndex ? '' : 'closed'}>
        {isOpenSubMenu &&
          list?.map((sub, idx) => {
            return (
              <div
                key={sub.id}
                onClick={e => {
                  handleLink(e, idx);
                }}
                className="listSub"
              >
                <div
                  className={
                    subActiveIdx === idx
                      ? ['listDot', 'listActive'].join(' ')
                      : 'listDot'
                  }
                />
                {sub.name}
              </div>
            );
          })}
      </div>
    </li>
  );
};

export default ListItem;
