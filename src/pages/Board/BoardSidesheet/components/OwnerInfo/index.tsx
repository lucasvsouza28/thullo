import { FaUserCircle } from 'react-icons/fa';
import { BoardType } from '../../../../../@types';
import UserAvatar from '../../../../../components/UserAvatar';
import Subtitle from "../Subtitle";

type OwnerInfoProps = {
  board: BoardType,
};

const OwnerInfo = ({
  board,
}: OwnerInfoProps) => (
  <div>
    <Subtitle
      icon={FaUserCircle}
      text="Made by"
    />

    <div
      style={{
        display: 'flex',
        gap: 13.25,
        marginTop: '13px',
      }}
    >
      <UserAvatar
        name={board.owner.name}
        source={board.owner.avatar}
        size='md'
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 2
        }}
      >
        <span
          style={{
            fontFamily: '$Poppins',
            fontSize: '12px',
            fontWeight: '600',
            lineHeight: '18px',
            letterSpacing: '-0.035em',
            color: '#333333',
          }}
        >
          {board.owner.name}
        </span>
        <span
          style={{
            fontFamily: 'Noto Sans',
            fontSize: '10px',
            fontWeight: '600',
            lineHeight: '14px',
            letterSpacing: '-0.035em',
            color: '#BDBDBD',
          }}
        >
          {board.createdAt.toLocaleDateString()}
        </span>
      </div>
    </div>
  </div>
);

export default OwnerInfo;
