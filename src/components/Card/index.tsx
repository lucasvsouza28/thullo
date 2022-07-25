import { UserType } from '../../@types';
import * as SC from './card.styles';
import TagsList from './components/TagsList';
import UsersList from './components/UsersList';

type CardProps = {
  variant?: 'more-users' | 'actions',
  title: string,
  image?: string;
  tags?: string[];
  users: UserType[] | undefined;
  commentsCount?: number;
  attachmentsCount?: number;
  onAddUser?: () => void;
};

const Card = ({
  image,
  title,
  tags,
  users,
  onAddUser,
  commentsCount = 0,
  attachmentsCount = 0,
  variant = 'more-users',
}: CardProps) => {
  return (
    <SC.Container>
      { (image?.length ?? 0) > 0 && (
        <SC.Image
          src={image}
          alt={`${title}'s board image`}
          title={title}
        />
      )}

      <SC.Title>
        {title}
      </SC.Title>

      <TagsList
        tags={tags}
      />

      <UsersList
        variant={variant}
        users={users}
        onAddUser={onAddUser}
        commentsCount={commentsCount}
        attachmentsCount={attachmentsCount}
      />
    </SC.Container>
  )
}

export default Card
