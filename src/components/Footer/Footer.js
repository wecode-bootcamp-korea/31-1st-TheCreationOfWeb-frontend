import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="widthFooter">
      <div className="footer">
        <ul className="address">
          <li>
            <div className="lb-wrap">
              {/* <img className="lb-image" src="/images/round.png" /> */}
              <div className="lb-text">1st</div>
            </div>
            <p>서울시 강남구 테헤란로 427</p>
            <p>We Work tower 427</p>
            <p>Ganamgu, Seoul, Korea</p>
          </li>
          <li>
            <div className="lb-text">2nd</div>
            <p>서울특별시 강남구 대치동 922-17</p>
            <p>1 Floor BHC</p>
            <p>Ganamgu, Seoul, Korea</p>
          </li>
          <li>
            <div className="lb-text">3rd</div>
            <p>서울특별시 강남구 청담동 89-8</p>
            <p>1 Floor Nari Chundam</p>
            <p>Ganamgu, Seoul, Korea</p>
          </li>
        </ul>
        <ul className="create">
          <li>
            <span>
              <FaRegCopyright className="icons" />
              2022 CreationOfWeb
            </span>
            <p>상호. (주)천지창조</p>
            <p>대표. 남용현 류미류 김동욱 한상안 노영완</p>
            <p>통신판매업. 류미류 한상안</p>
            <p>UI판매업. 남용현 김동욱 노영완</p>
            <br />
            <p>TEl. 010 1234 4567 (연중무휴)</p>
            <p>WHOLESALE. 010 9876 6543</p>
            <p>Fax. 1234 1234</p>
            <p>E-MAIL. abcdefghi@gmail.com</p>
            <p>
              <BsInstagram />
            </p>
          </li>
        </ul>
        <ul>
          <li className="lastText">
            <p>천~~지</p>
            <p>창~~조</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
