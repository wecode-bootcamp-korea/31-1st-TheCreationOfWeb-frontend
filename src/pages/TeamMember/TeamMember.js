import React from 'react';
import TeamMemberList from './TeamMemberList';
import TEAMMEMBER_LIST_DATA from './TeamMemberListData';
const TeamMember = () => {
  return (
    <div className="teamMember">
      {TEAMMEMBER_LIST_DATA.map(({ id, src, writer, content }) => {
        return (
          <TeamMemberList
            key={id}
            src={src}
            writer={writer}
            content={content}
          />
        );
      })}
    </div>
  );
};

export default TeamMember;
