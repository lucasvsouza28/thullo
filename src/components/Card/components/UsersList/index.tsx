import { Fragment, useCallback } from 'react';
import UserAvatar from '../../../UserAvatar';
import * as SC from './users-list.styles';

const UsersList = ({
  users,
}: {
  users: {
    avatar?: string,
    name: string,
  }[] | undefined
}) => {
  if ((users?.length ?? 0) === 0) return null;

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
      {users!.length > 3 && (
        <SC.MoreUsersCaption>
          + {users!.length - 3} others
        </SC.MoreUsersCaption>
      )}
    </SC.UsersContainer>
  )
}

export default UsersList;
