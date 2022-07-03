import { Fragment, useCallback } from 'react';
import * as SC from './card.styles';

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
  const getAbbreviation = useCallback((name: string) => {
    let abbreviation = '';
    const parts = name.split(' ');

    if (parts.length === 1) abbreviation = parts[0][0];
    else if (parts.length > 1) abbreviation = parts[0][0] + parts[1][0];

    return abbreviation;
  }, []);

  return (
    <SC.Container>
      { (image?.length ?? 0) > 0 && (
        <SC.Image
          src={image}
        />
      )}

      <SC.Title>
        {title}
      </SC.Title>

      {(tags?.length ?? 0) > 0 && (
        <SC.TagsContainer>
          {tags?.map((tag, i) => (
            <SC.Tag
              key={i}
            >
              {tag}
            </SC.Tag>
          ))}
        </SC.TagsContainer>
      )}

      <SC.UsersContainer>
        {users.map((user, i) => {
          if (i > 2) return null;

          return (
            <Fragment
              key={i}
            >
              {(user.avatar?.length ?? 0) > 0 ? (
                <SC.UserAvatar
                  src={user.avatar}
                />
              ): (
                <SC.UserAbbreviaton>
                  {getAbbreviation(user.name)}
                </SC.UserAbbreviaton>
              )}
            </Fragment>
          )})
        }
        {users.length > 3 && (
          <SC.MoreUsersCaption>
            + {users.length - 3} others
          </SC.MoreUsersCaption>
        )}
      </SC.UsersContainer>
    </SC.Container>
  )
}

export default Card
