import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = ({ setIsLogin }) => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigate = useNavigate();

  const goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.1.146:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        user: userId,
        password: userPassword,
      }),
    })
      .then(res => res.status === 200 && res.json())
      .then(res => {
        console.log(res);
        if (res.token) {
          localStorage.setItem('fruitz_user', res.token);
          navigate('/');
          setIsLogin(true);
        } else {
          alert('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
      });
  };

  const goToJoin = () => {
    navigate('/member/join');
  };

  const handleIdInput = e => {
    setUserId(e.target.value);
  };

  const handlePwInput = e => {
    setUserPassword(e.target.value);
  };
  return (
    <div className="Login">
      <div className="loginCont">
        <div className="loginLogo">LOGIN</div>
        <form className="inputDataBox">
          <div className="inputCont">
            <input
              type="text"
              className="idBox"
              placeholder="ID"
              onChange={handleIdInput}
            />
            <input
              type="password"
              className="pwBox"
              placeholder="PASSWORD"
              onChange={handlePwInput}
            />
          </div>
          <div className="searchBox">
            <div className="idSearch">아이디 찾기</div>
            <div className="wall" />
            <div className="pwSearch">비밀번호 찾기</div>
          </div>
          <span className="buttonBox">
            <button className="loginButton" onClick={goToMain}>
              로그인
            </button>
            <button className="joinButton" onClick={goToJoin}>
              회원가입
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
