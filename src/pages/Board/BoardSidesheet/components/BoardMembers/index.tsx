import { useCallback } from "react";
import { HiUsers } from "react-icons/hi";
import { BoardType } from "../../../../../@types";
import Button from "../../../../../components/Buttton";
import UserAvatar from "../../../../../components/UserAvatar";
import Subtitle from "../Subtitle";

type BoardMembersProps = {
  board: BoardType
};

const BoardMembers = ({
  board,
}: BoardMembersProps) => {
  const handleRemoveMember = useCallback((member: { id: string }) => {
    console.log('remove board member', { board, member })
  }, [board]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
      }}
    >
      <Subtitle
        icon={HiUsers}
        text="Members"
      />

      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
        }}
      >
        { (board?.members ?? []).map((member, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <UserAvatar
              size="sm"
              name={member.name}
              source={member.avatar}
            />

            { member.id === board.owner.id ? (
              <span
                style={{
                  width: '70px',
                  textAlign: 'center',
                  fontFamily: 'Poppins',
                  fontSize: '10px',
                  fontWeight: '500',
                  lineHeight: '15px',
                  letterSpacing: '-0.035em',
                  color: '#BDBDBD',
                }}
              >
                Admin
              </span>
            ) : (
              <Button
                variant='outlined'
                color="red"
                onClick={() => handleRemoveMember(member)}
              >
                Remove
              </Button>
            )}
          </div>
        ))}
      </ul>
    </div>
  )
};

export default BoardMembers
