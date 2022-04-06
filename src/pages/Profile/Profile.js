import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import './Profile.scss';

const Profile = () => {
  const [profileInputs, setProfileInputs] = useState({
    user: '',
    address: '',
    phone_number: '',
    amount: '',
  });

  const navigate = useNavigate();

  const handleInputs = e => {
    const { name, value } = e.target;
    setProfileInputs({
      ...profileInputs,
      [name]: value,
    });
  };

  //   useEffect(() => {
  //     const goToMain  = ()  => {
  //     fetch('http://10.58.6.155:8000/users/user', {
  //       method: 'GET',
  //       headers: {
  //         Authorization: localStorage.getItem('fruitz_user'),
  //       },
  //     })
  //       .then(response => response.json())
  //       .then(data => {setProfileInputs(data)
  //         navigate('/')

  //       });
  //   }, []) ;
  // };

  const goToMain = () => {
    navigate('/');
  };

  useEffect(() => {
    fetch('http://10.58.6.155:8000/users/user', {
      headers: {
        Authorization: localStorage.getItem('fruitz_user'),
      },
    })
      .then(response => response.json())
      .then(data => {
        setProfileInputs(data);
      });
  }, []);

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
                  name="user"
                  defaultValue={profileInputs.user}
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
                  defaultValue={profileInputs.address}
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
                  defaultValue={profileInputs.phone_number}
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
                  defaultValue={profileInputs.amount}
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
