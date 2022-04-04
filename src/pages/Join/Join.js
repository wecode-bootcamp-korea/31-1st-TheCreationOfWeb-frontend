import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Join.scss';

const Join = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userSavedMoney, setUserSavedMoney] = useState(0);

  const goToMain = () => {
    fetch('http://10.58.7.124:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        user: userId,
        password: userPassword,
        name: userName,
        address: userAddress,
        phone_number: userPhoneNumber,
        email: userEmail,
        money: userSavedMoney,
      }),
    })
      .then(res => {
        if (res.ok) {
          console.log(res);
          navigate('/');
        } else {
          alert('제대로 확인하세요');
        }
        return res.json();
      })
      .then(res => {
        console.log(res);
      });
  };

  const doCancel = () => {
    navigate('/member/login');
  };
  const handleIdInput = e => {
    setUserId(e.target.value);
  };

  const handlePwInput = e => {
    setUserPassword(e.target.value);
  };

  const handleNameInput = e => {
    setUserName(e.target.value);
  };

  const handleAddressInput = e => {
    setUserAddress(e.target.value);
  };

  const handleTelInput = e => {
    setUserPhoneNumber(e.target.value);
  };

  const handleEmailInput = e => {
    setUserEmail(e.target.value);
  };

  const handleSavedMoneyInput = e => {
    setUserSavedMoney(e.target.value);
  };
  return (
    <main className="Join">
      <form>
        <div className="joinInputBox">
          <div className="idInputBox">
            <ul className="inputCategory">
              <li className="categoryText">아이디</li>
              <li className="idCheckBox">
                <input
                  type="text"
                  onChange={handleIdInput}
                  className="inputBox"
                />
                <button className="checkButton">CHECK</button>
              </li>
            </ul>
          </div>

          <div className="pwInputBox">
            <ul className="inputCategory">
              <li className="categoryText">비밀번호</li>
              <li>
                <input
                  type="password"
                  onChange={handlePwInput}
                  className="inputBox"
                />
                <span>(영문 소문자/숫자/특수문자)</span>
              </li>
            </ul>
          </div>

          <div className="nameInputBox">
            <ul className="inputCategory">
              <li className="categoryText">이름</li>
              <li>
                <input
                  type="text"
                  onChange={handleNameInput}
                  className="inputBox"
                />
              </li>
            </ul>
          </div>

          <div className="addressInputBox">
            <ul className="inputCategory">
              <li className="categoryText">주소</li>
              <li className="address">
                <input
                  type="text"
                  className="inputBox inputAddress"
                  onChange={handleAddressInput}
                />
                <button className="addressButton">우편번호</button> <br />
              </li>
            </ul>
          </div>

          <div className="telInputBox">
            <ul className="inputCategory">
              <li className="categoryText">휴대전화</li>
              <li>
                <input
                  type="text"
                  onChange={handleTelInput}
                  className="inputBox"
                />
              </li>
            </ul>
          </div>

          <div className="emailInputBox">
            <ul className="inputCategory">
              <li className="categoryText">이메일</li>
              <li>
                <input
                  type="text"
                  onChange={handleEmailInput}
                  className="inputBox"
                />
              </li>
            </ul>
          </div>

          <div className="savedMoney">
            <ul className="inputCategory">
              <li className="categoryText">적립금</li>
              <li>
                <input
                  type="text"
                  onChange={handleSavedMoneyInput}
                  className="inputBox"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="agreeButtonBox">
          <button onClick={goToMain} className="joinButton" type="button">
            JOIN
          </button>
          <button className="cancelButton" onClick={doCancel}>
            CANCEL
          </button>
        </div>
      </form>
    </main>
  );
};

export default Join;
