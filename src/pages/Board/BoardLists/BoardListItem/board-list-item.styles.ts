import { styled } from "../../../../../stitches.config";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',

});

export const BoardTitle = styled('span', {
  fontFamily: '$Poppins',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '21px',
  letterSpacing: '-0.035em',
  textAlign: 'left',
});

export const IconButton = styled('button', {
  cursor: 'pointer',

  display: 'grid',
  placeItems: 'center',

  background: 'transparent',
  outline: 'none',
  border: 'none',

  '&:active': {
    transform: 'scale(98%)',
  }
});

export const AddBoardCardButton = styled('button', {
  cursor: 'pointer',

  display: 'flex',
  justifyContent: 'space-between',

  border: 'none',
  outline: 'none',

  background: '#DAE4FD',

  padding: '8px 12px',

  color: '#2F80ED',

  borderRadius: '$8',

  '&:active' : {
    transform: 'scale(98%)'
  }
});
