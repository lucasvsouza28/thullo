import { useCallback } from 'react';
import { BsPlus } from 'react-icons/bs';
import Button from "../../../../../components/Buttton";
import UserAvatar from "../../../../../components/UserAvatar";

type BoardUsersListProps = {};

const BoardUsersList = ({

}: BoardUsersListProps) => {
  const users = [
    { avatar: 'https://avatars.dicebear.com/api/big-smile/lucasvsouza.svg?b=lightgray', name: 'Lucas' },
    { avatar: 'https://avatars.dicebear.com/api/female/adriana.svg?b=lightgray', name: 'Adriana Domingues' },
    { avatar: 'https://avatars.dicebear.com/api/female/catarina.svg?b=lightgray', name: 'Catarina Domingues' },
  ];

  const handleAddMember = useCallback(() => {
    console.log('handleAddMember')
  }, []);

  return (
    <>
      {users.map((user, i) => (
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
