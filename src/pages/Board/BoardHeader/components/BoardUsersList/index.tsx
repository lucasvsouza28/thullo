import { useCallback } from 'react';
import { BsPlus } from 'react-icons/bs';
import { UserType } from '../../../../../@types';
import Button from "../../../../../components/Buttton";
import UserAvatar from "../../../../../components/UserAvatar";

type BoardUsersListProps = {
  members: UserType[] | undefined;
};

const BoardUsersList = ({
  members,
}: BoardUsersListProps) => {
  const handleAddMember = useCallback(() => {
    console.log('handleAddMember')
  }, []);

  return (
    <>
      {(members ?? []).map((user, i) => (
        <UserAvatar
          key={i}
          source={user.avatar}
          name={user.name}
          size='md'
        />
      ))}
      <Button
        variant="primary"
        size='sm'
        onClick={handleAddMember}
      >
        <BsPlus
          size={15}
          color='#FFF'
        />
      </Button>
    </>
  )
}

export default BoardUsersList
