import * as SC from './card.styles';
import TagsList from './components/TagsList';
import UsersList from './components/UsersList';

type CardProps = {
  title: string,
  image?: string;
  tags?: string[],
  users: {
    avatar?: string,
    name: string,
  }[]
};

const Card = ({
  image,
  title,
  tags,
  users,
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
        users={users}
      />
    </SC.Container>
  )
}

export default Card
