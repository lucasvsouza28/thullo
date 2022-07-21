import { RiArrowDownSFill } from 'react-icons/ri';
import { UserType } from '../../../../@types';
import UserAvatar from '../../../UserAvatar';
import * as SC from './profile.styles';

type ProfileProps = {
  owner: UserType | undefined;
}

const Profile = ({
  owner,
}: ProfileProps) => {
  return (
    <SC.Container>
      <UserAvatar
        size='md'
        source={owner?.avatar}
        name={owner?.name ?? ''}
      />
      <SC.Name>
        {owner?.name}
      </SC.Name>
      <RiArrowDownSFill
        size={18}
      />
    </SC.Container>
  )
}

export default Profile
