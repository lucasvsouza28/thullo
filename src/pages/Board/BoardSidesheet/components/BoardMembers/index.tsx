import { useCallback } from "react";
import { HiUsers } from "react-icons/hi";
import { BoardType } from "../../../../../@types";
import Button from "../../../../../components/Buttton";
import UserAvatar from "../../../../../components/UserAvatar";
import Subtitle from "../Subtitle";
import * as SC from './board-members.styles';

type BoardMembersProps = {
  board: BoardType | undefined,
};

const BoardMembers = ({
  board,
}: BoardMembersProps) => {
  const handleRemoveMember = useCallback((member: { id: string }) => {
    console.log('remove board member', { board, member })
  }, [board]);

  return (
    <SC.Containter>
      <Subtitle
        icon={HiUsers}
        text="Members"
      />

      <SC.MembersList>
        { (board?.members ?? []).map((member, i) => (
          <SC.MemberListItem
            key={i}
          >
            <SC.MemberInfoContainer>
              <UserAvatar
                size="md"
                name={member.name}
                source={member.avatar}
              />
              {member.name}
            </SC.MemberInfoContainer>

            { member.id === board?.owner.id ? (
              <SC.Owner>
                Admin
              </SC.Owner>
            ) : (
              <Button
                variant='outlined'
                color="red"
                onClick={() => handleRemoveMember(member)}
              >
                Remove
              </Button>
            )}
          </SC.MemberListItem>
        ))}
      </SC.MembersList>
    </SC.Containter>
  )
};

export default BoardMembers
