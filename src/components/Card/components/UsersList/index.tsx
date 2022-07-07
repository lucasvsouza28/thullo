import { Fragment, useCallback } from 'react';
import * as SC from './users-list.styles';

const UsersList = ({
  users,
}: {
  users: {
    avatar?: string,
    name: string,
  }[] | undefined
}) => {
  const getAbbreviation = useCallback((name: string) => {
    let abbreviation = '';
    const parts = name.split(' ');

    if (parts.length === 1) abbreviation = parts[0][0];
    else if (parts.length > 1) abbreviation = parts[0][0] + parts[1][0];

    return abbreviation;
  }, []);

  if ((users?.length ?? 0) === 0) return null;

  return (
    <SC.UsersContainer>
      {users?.slice(0, 3).map((user, i) =>(
          <Fragment
            key={i}
          >
            {(user.avatar?.length ?? 0) > 0 ? (
              <SC.UserAvatar
                src={user.avatar}
                alt={`${user.name}'s avatar`}
                title={user.name}
              />
            ): (
              <SC.UserAbbreviaton
                title={user.name}
              >
                {getAbbreviation(user.name)}
              </SC.UserAbbreviaton>
            )}
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
