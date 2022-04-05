import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Profile.scss';

const Profile = () => {
  const [profileInputs, setProfileInputs] = useState({
    idValue: '',
    userValue: '',
    addressValue: '',
    phone_numberValue: '',
    amountValue: '',
  });

  const navigate = useNavigate();

  const handleInputs = e => {
    const { name, value } = e.target;
    setProfileInputs({
      ...profileInputs,
      [name]: value,
    });
  };

  const goToMain = () => {
    fetch('/data/userInfo.json', {
      headers: {
        Authorization: localStorage.getItem('fruitz_user'),
      },
      body: JSON.stringify,
    })
      .then(response => response.json())
      .then(data => {
        setProfileInputs(data);
        navigate('/');
      });
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
                  className="inputBox"
                  onChange={handleInputs}
                  name="id"
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
                  className="inputBox"
                  onChange={handleInputs}
                  name="address"
                />
              </li>
            </ul>
          </div>

          <div className="telInputBox">
            <ul className="inputCategory">
              <li className="categoryText">휴대전화</li>
              <li>
                <input
                  type="text"
                  className="inputBox"
                  onChange={handleInputs}
                  name="phone_number"
                />
              </li>
            </ul>
          </div>

          <div className="savedMoney">
            <ul className="inputCategory">
              <li className="categoryText">프룯츠 페이</li>
              <li>
                <input
                  type="text"
                  className="inputBox"
                  onChange={handleInputs}
                  name="amount"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="agreeButtonBox">
          <button className="joinButton" type="button" onClick={goToMain}>
            CONFIRM
          </button>
          <button className="cancelButton">CANCEL</button>
        </div>
      </form>
    </main>
  );
};

export default Profile;
