import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [loginInputs, setLoginInputs] = useState({
    id: '',
    pw: '',
  });

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
    fetch('http://10.58.1.198:8000/users/signin', {
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
          localStorage.setItem('token', result.token);
          navigate('/');
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
            />
            <input
              type="password"
              className="inputBox"
              name="pw"
              onChange={handleInputs}
            />
          </div>
          <div className="searchBox">
            <div className="search">아이디 찾기</div>
            <div className="wall" />
            <div className="search">비밀번호 찾기</div>
          </div>
          <span className="buttonBox">
            <button className="button" onClick={goToMain} type="button">
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
