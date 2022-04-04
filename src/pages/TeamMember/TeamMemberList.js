import React, { useState } from 'react';
import './TeamMemberList.scss';
import Modal from './Modal';

const TeamMemberList = ({ src, writer, content }) => {
  let [modalList, setModalList] = useState(false);

  return (
    <div>
      <ul className="teamMemberList">
        <li className="teamMemberListImg">
          <img
            onClick={() => {
              setModalList(true);
            }}
            className="teamMemberImg"
            src={src}
            alt=""
          />
        </li>
      </ul>

      <ul>
        {modalList ? (
          <Modal
            src={src}
            writer={writer}
            content={content}
            modalList={modalList}
            setModalList={setModalList}
          />
        ) : null}
      </ul>
    </div>
  );
};

export default TeamMemberList;
