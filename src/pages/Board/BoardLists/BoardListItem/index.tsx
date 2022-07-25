import { useCallback, useState } from "react";
import {
  BsPlusLg,
  BsThreeDots
} from "react-icons/bs";
import { Box } from "../../../../../stitches.config"
import {
  BoardListType,
  CardType
} from "../../../../@types";
import Card from "../../../../components/Card";
import * as SC from './board-list-item.styles';

const BoardListItem = ({
  list,
}: {
  list: BoardListType
}) => {
  const [contextMenuOpen, setContextMenuOpen] = useState(false);

  const handleAddUser = useCallback((board: BoardListType, card: CardType) => {
    console.log('onAddUser', { board, card });
  }, []);

  const handleAddCard = useCallback((list: BoardListType) => {
    console.log('handleAddCard', { list });
  }, []);

  return (
    <SC.Container
      style={{ position: 'relative' }}
    >
      {contextMenuOpen && (
        <Box
          className='context-menu'
          css={{
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            right: -135,
            top: '24px',
            zIndex: '3',
            backgroundColor: '#FFF',
            width: '151px',
            borderRadius: '$12',
            border: '1px solid #E0E0E0',
            boxShadow: '0px 2px 4px 0px #0000000D',
            padding: '0 10px',
          }}
        >
          <Box
            css={{
              color: '#828282',
              fontFamily: '$Poppins',
              fontSize: '10px',
              fontWeight: '500',
              lineHeight: '15px',
              letterSpacing: '-0.035em',
              padding: '12px 0',
            }}
          >
            Rename
          </Box>
          <hr
            style={{
              border: '1px solid #E0E0E0',
            }}
          />
          <Box
            css={{
              color: '#828282',
              fontFamily: '$Poppins',
              fontSize: '10px',
              fontWeight: '500',
              lineHeight: '15px',
              letterSpacing: '-0.035em',
              padding: '12px 0',
            }}
          >
            Delete this list
          </Box>
        </Box>
      )}
      <Box css={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <SC.BoardTitle>
          { list.title }
        </SC.BoardTitle>
        <SC.IconButton
          onClick={() => setContextMenuOpen((state) => !state)}
        >
          <BsThreeDots color='#828282' size={14} />
        </SC.IconButton>
      </Box>
      {(list?.items ?? []).map((card, i) => (
        <Card
          key={i}
          variant='actions'
          commentsCount={card?.comments?.length ?? 0}
          attachmentsCount={card?.attachments?.length ?? 0}
          onAddUser={() => handleAddUser(list, card)}
          {...card}
        />
      ))}
      <SC.AddBoardCardButton
        onClick={() => handleAddCard(list)}
      >
        Add another card
        <BsPlusLg
          color='#2F80ED'
        />
      </SC.AddBoardCardButton>
    </SC.Container>
  );
}

export default BoardListItem
