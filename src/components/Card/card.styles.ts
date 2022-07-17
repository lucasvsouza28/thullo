import { styled } from "../../../stitches.config"

export const Container = styled('div', {
  cursor: 'pointer',

  display: 'flex',
  flexDirection: 'column',
  gap: '12px',

  borderRadius: '$8',

  padding: '12px 12px 18px',

  backgroundColor: '$element_board_card',

  width: '243px',
  minHeight: '243px',

  boxShadow: '0px 4px 12px 0px #0000000D',
});

export const Image = styled('img', {
  width: '100%',
  height: '130px',
  objectFit: 'cover',

  borderRadius: '$12',
});

export const Title = styled('div', {
  fontFamily: '$Noto-Sans',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '22px',
  letterSpacing: '-0.035em',
});
