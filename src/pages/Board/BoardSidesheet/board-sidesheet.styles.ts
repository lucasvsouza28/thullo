import { styled } from "../../../../stitches.config";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,

  position: 'absolute',
  top: '-35px',
  bottom: 0,

  backgroundColor: '#FFF',

  boxShadow: '0px 4px 12px 0px #0000000D',

  padding: '23px 20px',
});

export const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  'h5': {
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '18px',
    letterSpacing: '-0.035em',
  },

  borderBottom: '1px solid #E0E0E0',
});

export const CloseButton = styled('div', {
  cursor: 'pointer',

  background: 'transparent',
  outline: 'none',
  border: 'none',

  '&:active': {
    transform: 'scale(98%)'
  }
});
