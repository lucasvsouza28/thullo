import UserAvatar from "../../../../../components/UserAvatar";

type BoardUsersListProps = {};

const BoardUsersList = ({

}: BoardUsersListProps) => {
  const users = [
    { avatar: '', name: 'Lucas' },
    { avatar: 'https://cataas.com/cat', name: 'Adriana Domingues' },
    { avatar: 'https://cataas.com/cat', name: 'Catarina Domingues' },
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
    </>
  )
}

export default BoardUsersList
