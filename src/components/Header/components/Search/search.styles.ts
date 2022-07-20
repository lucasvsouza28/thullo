import { styled } from '../../../../../stitches.config';
import Button from '../../../Buttton';

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  height: '34px',
  width: '338px',

  boxShadow: '0px 4px 12px 0px #0000001A',

  borderRadius: '$8',

  '&>input': {
    background: 'transparent',

    padding: '9px 0 9px 13px',

    border: 'none',

    fontSize: '10px',
    fontWeight: '500',
    lineHeight: '15px',
    letterSpacing: '-0.035em',
    textAlign: 'left',

    '&:placeholder': {
      color: '#BDBDBD',
    },

    '&:active, &:focus': {
      border: 'none',
      outline: 'none',
    },

    width: '100%',
  }
});

export const SearchButton = styled(Button, {
  width: '74px',
  height: '100%',
});
