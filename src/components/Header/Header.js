import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginState } from '../../LoginContext';
import './Header.scss';

const Header = () => {
  const navigate = useNavigate();
  const loginState = useLoginState();
  const { isLogin, setIsLogin } = loginState;

  const goToPage = (event, idx) => {
    if (idx === 6) {
      alert('다국어는 지금 지원하지 않습니다.');
      return;
    }
    if (isLogin && idx === 0) {
      localStorage.removeItem('fruitz_user');
      setIsLogin(false);
      navigate('member/login');
      return;
    }
    navigate({
      pathname:
        idx === 0 || idx === 1
          ? `member/${event.target.innerText.replace(' ', '').toLowerCase()}`
          : `${event.target.innerText.replace(' ', '').toLowerCase()}`,
    });
  };

  const NAV_LIST = [
    isLogin ? 'LOGOUT' : 'LOGIN',
    'MY PAGE',
    'CART',
    'ENG VER(GLOBAL SHIPPING)',
  ];

  return (
    <section className="header">
      <nav className="nav">
        <div className="navTitle">
          <h3 className="title">FRUITZ COMPANY</h3>
          <p className="subTitle">FRESH & NUTRITION</p>
        </div>
        <ul className="navMenu">
          {NAV_LIST.map((listName, idx) => {
            return (
              <li
                key={idx}
                className="navList"
                onClick={event => {
                  goToPage(event, idx);
                }}
              >
                {listName}
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default Header;
