import { Fragment } from 'react';
import { BsPlus } from 'react-icons/bs';
import { CgAttachment } from 'react-icons/cg';
import { MdInsertComment } from 'react-icons/md';
import { UserType } from '../../../../@types';
import Button from '../../../Buttton';
import UserAvatar from '../../../UserAvatar';
import * as SC from './users-list.styles';

type UsersListProps = {
  users: UserType[] | undefined,
  commentsCount: number,
  attachmentsCount: number,
  onAddUser?: () => void,
  variant?: 'more-users' | 'actions',
};

const UsersList = ({
  users,
  commentsCount,
  attachmentsCount,
  onAddUser,
  variant = 'more-users',
}: UsersListProps) => {
  if ((users?.length ?? 0) === 0 && !onAddUser) return null;

  const showMoreUsers = variant === 'more-users' && users!.length > 3;
  const showActions = variant === 'actions';

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
      {showMoreUsers && (
        <SC.MoreUsersCaption>
          + {(users?.length ?? 0) - 3} others
        </SC.MoreUsersCaption>
      )}
      {showActions && (
        <>
          <SC.ActionCounterContainer>
            <MdInsertComment
              color='#BDBDBD'
              size={12}
            />
            <span>{commentsCount}</span>
          </SC.ActionCounterContainer>
          <SC.ActionCounterContainer>
            <CgAttachment
              color='#BDBDBD'
              size={12}
            />
            <span>{attachmentsCount}</span>
          </SC.ActionCounterContainer>
        </>
      )}
    </SC.UsersContainer>
  )
}

export default UsersList;
