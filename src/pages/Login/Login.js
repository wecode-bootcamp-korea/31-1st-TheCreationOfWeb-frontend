import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginState } from '../../LoginContext';
import { BASE_URL } from '../../config';
import './Login.scss';

const Login = () => {
  const [loginInputs, setLoginInputs] = useState({
    id: '',
    pw: '',
  });
  const loginState = useLoginState();
  const { isLogin, setIsLogin } = loginState;

  const navigate = useNavigate();

  const handleInputs = e => {
    const { name, value } = e.target;

    setLoginInputs({
      ...loginInputs,
      [name]: value,
    });
  };

  const goToMain = e => {
    e.preventDefault();
    fetch(`${BASE_URL}users/signin`, {
      method: 'POST',
      body: JSON.stringify({
        user: loginInputs.id,
        password: loginInputs.pw,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.token) {
          alert('로그인 성공');
          localStorage.setItem('fruitz_user', result.token);
          navigate('/');
          setIsLogin(true);
        } else {
          alert('로그인 실패');
        }
      });
  };

  const goToJoin = () => {
    navigate('/member/join');
  };

  return (
    <div className="Login">
      <div className="loginCont">
        <div className="loginLogo">LOGIN</div>
        <form className="inputDataBox">
          <div className="inputCont">
            <input
              type="text"
              className="inputBox"
              name="id"
              onChange={handleInputs}
              autocomplete="off"
            />
            <input
              type="password"
              className="inputBox"
              name="pw"
              onChange={handleInputs}
              autocomplete="off"
            />
          </div>
          <div className="searchBox">
            <div className="search">아이디 찾기</div>
            <div className="wall" />
            <div className="search">비밀번호 찾기</div>
          </div>
          <span className="buttonBox">
            <button className="button" onClick={goToMain}>
              로그인
            </button>
            <button className="button" onClick={goToJoin}>
              회원가입
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
