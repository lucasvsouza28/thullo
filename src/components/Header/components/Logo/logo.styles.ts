import { styled } from "../../../../../stitches.config";

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',

  fontWeight: '600',
  fontSize: '18px',
  lineHeight: '27px',
  letterSpacing: '-0.035em',
});

export const Logo = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',

  width: '32px',
  height: '29px',

  '&:before': {
    content: '',

    height: '100%',
    width: '14px',

    backgroundColor: '#2F80ED',

    borderRadius: '4px',
  },

  '&:after': {
    content: '',

    height: '60%',
    width: '14px',

    backgroundColor: '#2F80ED',

    borderRadius: '4px',
  },
});
