import { RiArrowDownSFill } from 'react-icons/ri';
import UserAvatar from '../../../UserAvatar';
import * as SC from './profile.styles';

const Profile = () => {
  return (
    <SC.Container>
      <UserAvatar
        size='md'
        source="https://avatars.dicebear.com/api/big-smile/lucasvsouza.svg"
        name='current user'
      />
      <SC.Name>
        Lucas Souza
      </SC.Name>
      <RiArrowDownSFill
        size={18}
      />
    </SC.Container>
  )
}

export default Profile
