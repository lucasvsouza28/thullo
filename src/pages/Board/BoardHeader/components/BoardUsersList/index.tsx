import { BsPlus } from 'react-icons/bs';
import Button from "../../../../../components/Buttton";
import UserAvatar from "../../../../../components/UserAvatar";

type BoardUsersListProps = {};

const BoardUsersList = ({

}: BoardUsersListProps) => {
  const users = [
    { avatar: 'https://avatars.dicebear.com/api/big-smile/lucasvsouza.svg', name: 'Lucas' },
    { avatar: 'https://avatars.dicebear.com/api/female/adriana.svg', name: 'Adriana Domingues' },
    { avatar: 'https://avatars.dicebear.com/api/female/catarina.svg', name: 'Catarina Domingues' },
  ];

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
