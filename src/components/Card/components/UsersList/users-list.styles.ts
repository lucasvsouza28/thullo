import { styled } from "../../../../../stitches.config";

export const UsersContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',

  marginTop: '21px',
});

export const MoreUsersCaption = styled('span', {
  fontFamily: '$Noto-Sans',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '16px',
  letterSpacing: '-0.035em',

  color: '#BDBDBD',
});

export const ActionCounterContainer = styled('div', {
  display: 'flex',
  gap: 5,
  alignItems: 'center',

  color: '#BDBDBD',

  fontFamily: '$Noto-Sans',
  fontSize: '10px',
  fontWeight: '500',
  lineHeight: '14px',
  letterSpacing: '-0.035em',
});
