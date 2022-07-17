import { styled } from "../../../../../stitches.config";

export const Container = styled('div', {
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  gap: '14px',
});

export const Name = styled('span', {
  fontFamily: '$Noto-Sans',
  fontSize: '12px',
  fontWeight: '700',
  lineHeight: '16px',
  letterSpacing: '-0.035em',
  textAlign: 'left',
});
