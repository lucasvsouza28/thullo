import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { BoardType } from "../../../../../@types";
import Button from "../../../../../components/Buttton";
import Subtitle from "../Subtitle";

type BoardDescriptionProps = {
  board: BoardType | undefined,
};

const BoardDescription = ({
  board,
}: BoardDescriptionProps) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
    }}
  >
    <div
      style={{
        display: 'flex',
        gap: 14,
      }}
    >
      <Subtitle
        icon={BsFillFileEarmarkTextFill}
        text="Description"
      />
      <Button
        variant="outlined"
        color="gray"
      >
        <MdEdit color="#828282" />
        Edit
      </Button>
    </div>
    <p
      style={{
        fontFamily: '$Noto-Sans',
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '19px',
        letterSpacing: '-0.035em',
        color: '#000000',
      }}
    >
      {board?.description}
    </p>
  </div>
);

export default BoardDescription
