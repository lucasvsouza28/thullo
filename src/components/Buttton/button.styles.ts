import { styled } from "../../../stitches.config";

export const Container = styled('button', {
  cursor: 'pointer',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '13px',

  border: 'none',
  outline: 'none',
  borderRadius: '8px',

  padding: '7px 8px',

  minWidth: '32px',
  height: '32px',

  color: '#FFF',

  '&:active': {
    transform: 'scale(98%)',
  },

  fontFamily: 'Poppins',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '18px',
  letterSpacing: '-0.035em',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$button_primary',
      },
      secondary: {
        backgroundColor: '$button_secondary',
        color: '#828282',
      },
      save: {
        backgroundColor: '$button_save',
      }
    },
  }
});
