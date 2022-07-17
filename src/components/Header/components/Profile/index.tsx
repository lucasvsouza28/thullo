import { RiArrowDownSFill } from 'react-icons/ri';
import UserAvatar from '../../../UserAvatar';
import * as SC from './profile.styles';

const Profile = () => {
  return (
    <SC.Container>
      <UserAvatar
        size='md'
        source="https://randomuser.me/api/portraits/men/66.jpg"
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
