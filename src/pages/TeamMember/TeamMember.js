import React from 'react';
import TeamMemberList from './TeamMemberList';
import TeamMember_List_Data from './TeamMemberListData';
const TeamMember = () => {
  return (
    <div className="teamMember">
      {TEAMEMEBER_LIST_DATA.map(teammeber => {
        return (
          <TeamMemberList
            key={teammeber.id}
            {...teammeber}
          />
        );
      })}
    </div>
  );
};

export default TeamMember;
