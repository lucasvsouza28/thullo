import { RiArrowDownSFill } from 'react-icons/ri';
import * as SC from './profile.styles';

const Profile = () => {
  return (
    <SC.Container>
      <SC.ProfileImage
        src="https://randomuser.me/api/portraits/men/66.jpg"
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
