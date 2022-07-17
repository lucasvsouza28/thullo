import { styled } from "../../../../../stitches.config";

export const Container = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
});

export const Tag = styled('span', {
  display: 'grid',
  placeItems: 'center',

  height: '18px',

  borderRadius: '$8',

  padding: '2px 9px',

  fontFamily: '$Noto-Sans',
  fontSize: '10px',
  fontWeight: '500',
  lineHeight: '14px',
  letterSpacing: '-0.035em',

  variants: {
    color: {
      blue: {
        backgroundColor: '#D5E6FB',
        color: '#2F80ED',
      },
      green: {
        backgroundColor: '#D3EADD',
        color: '#219653' },
      yellow: {
        backgroundColor: '#FCF4DB',
        color: '#F2C94C'
      },
      purple: {
        backgroundColor: '#EBDCF9',
        color: '#9B51E0'
      },
      orange: {
        backgroundColor: 'rgba(242, 153, 74, 0.2)',
        color: '#F2994A'
      },
    }
  },
});
