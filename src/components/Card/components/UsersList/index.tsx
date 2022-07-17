import { Fragment } from 'react';
import { BsPlus } from 'react-icons/bs';
import Button from '../../../Buttton';
import UserAvatar from '../../../UserAvatar';
import * as SC from './users-list.styles';

const UsersList = ({
  users,
  onAddUser,
}: {
  users: {
    avatar?: string,
    name: string,
  }[] | undefined,
  onAddUser?: () => void,
}) => {
  if ((users?.length ?? 0) === 0 && !onAddUser) return null;

  return (
    <SC.UsersContainer>
      {users?.slice(0, 3).map((user, i) =>(
          <Fragment
            key={i}
          >
            <UserAvatar
              source={user.avatar}
              name={user.name}
              alt={`${user.name}'s avatar`}
              title={user.name}
            />
          </Fragment>
      ))}
      {onAddUser !== undefined && (
        <Button
          onClick={onAddUser}
        >
          <BsPlus
            size={15}
            color='#FFF'
          />
        </Button>
      )}
      {users!.length > 3 && (
        <SC.MoreUsersCaption>
          + {users!.length - 3} others
        </SC.MoreUsersCaption>
      )}
    </SC.UsersContainer>
  )
}

export default UsersList;
