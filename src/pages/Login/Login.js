import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const goToMain = () => {
    fetch('member/login', {
      method: 'POST',
      body: JSON.stringify({
        user: userId,
        password: userPassword,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          navigate('/');
        } else {
          alert('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
      });
  };

  const handleIdInput = e => {
    setUserId(e.target.value);
  };

  const handlePwInput = e => {
    setUserPassword(e.target.value);
  };

  const navigate = useNavigate();

  return (
    <form>
      <input type="text" placeholder="ID" onChange={handleIdInput} />
      <input type="password" placeholder="PASSWORD" onChange={handlePwInput} />
      <button onClick={goToMain}>로그인</button>
      <button /*onClick={goToSignUp}*/>회원가입</button>
    </form>
  );
};

export default Login;
