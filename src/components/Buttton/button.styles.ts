import { styled } from "../../../stitches.config";

export const Container = styled('button', {
  cursor: 'pointer',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '13px',

  border: 'none',
  outline: 'none',
  borderRadius: '$8',

  padding: '7px 8px',

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
      },
    },
    size: {
      xs: {
        minWidth: '28px',
        height: '28px',
      },
      sm: {
        minWidth: '32px',
        height: '32px',
      },
    },
  }
});
