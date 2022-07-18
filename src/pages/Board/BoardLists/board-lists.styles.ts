import { styled } from "../../../../stitches.config";

export const Container = styled('section', {
  display: 'flex',
  flexWrap: 'nowrap',
  gap: 32,

  marginTop: '24px',

  borderRadius: '$24',

  backgroundColor: '#F8F9FD',

  padding: '24px',
  minWidth: '100%',
  width: 'fit-content',
});

export const BoardListItem = styled('div', {
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
