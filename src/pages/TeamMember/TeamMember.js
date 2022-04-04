import React from 'react';
import TeamMemberList from './TeamMemberList';
import TeamMember_List_Data from './TeamMemberListData';
const TeamMember = () => {
  // let [modalList, setModalList] = useState(false);

  // const toggleModalListHandler = () => {
  //   modalList ? setModalList(false) : setModalList(true);
  // };

  return (
    <div className="teamMember">
      {TeamMember_List_Data.map(teammeber => {
        return (
          <TeamMemberList
            key={teammeber.id}
            src={teammeber.src}
            writer={teammeber.writer}
            content={teammeber.content}
          />
        );
      })}
    </div>
  );
};

export default TeamMember;
