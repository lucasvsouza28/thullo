import { ImgHTMLAttributes, useCallback } from 'react';
import * as SC from './user-avatar.styles';

interface IUserAvatarProps extends ImgHTMLAttributes<HTMLElement> {
  size?: 'sm' | 'md',
  source?: string,
  name: string,
}

const UserAvatar = ({
  size = 'sm',
  name,
  source,
  ...props
}: IUserAvatarProps) => {
  const getAbbreviation = useCallback((name: string) => {
    let abbreviation = '';
    const parts = name?.split(' ') ?? [];

    if (parts.length === 1) abbreviation = parts[0][0];
    else if (parts.length > 1) abbreviation = parts[0][0] + parts[1][0];

    return abbreviation;
  }, []);

  return (
    <>
      {(source?.length ?? 0) > 0 ? (
        <SC.Container
          src={source}
          size={size}
          title={name}
          {...props}
        />
      ) : (
        <SC.UserAbbreviaton
          size={size}
          title={name}
        >
          {getAbbreviation(name)}
        </SC.UserAbbreviaton>
      )}
    </>
  )
}

export default UserAvatar
