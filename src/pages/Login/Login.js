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
  console.log(loginInputs);

  const goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.1.146:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        user: loginInputs.id,
        password: loginInputs.pw,
      }),
    })
      .then(res => res.status === 200 && res.json())
      .then(res => {
        if (res.token) {
          localStorage.setItem('fruitz_user', res.token);
          navigate('/');
        } else {
          alert('아이디 또는 비밀번호가 일치하지 않습니다.');
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
              name="ID"
              onChange={handleInputs}
            />
            <input
              type="password"
              className="inputBox"
              name="PASSWORD"
              onChange={handleInputs}
            />
          </div>
          <div className="searchBox">
            <div className="search">아이디 찾기</div>
            <div className="wall" />
            <div className="search">비밀번호 찾기</div>
          </div>
          <span className="buttonBox">
            <button className="Button" onClick={goToMain}>
              로그인
            </button>
            <button className="Button" onClick={goToJoin}>
              회원가입
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
