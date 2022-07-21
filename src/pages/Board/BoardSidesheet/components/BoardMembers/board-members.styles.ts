import { styled } from "../../../../../../stitches.config";

export const Containter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
});

export const MembersList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
});

export const MemberListItem = styled('li', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  listStyle: 'none',
  listStyleType: 'none',
});

export const MemberInfoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 17,

  fontFamily: '$Poppins',
  fontSize: '12px',
  fontWeight: '600',
  lineHeight: '18px',
  letterSpacing: '-0.035em',
});

export const Owner = styled('span', {
  color: '#BDBDBD',

  width: '70px',

  textAlign: 'center',
  fontFamily: 'Poppins',
  fontSize: '10px',
  fontWeight: '500',
  lineHeight: '15px',
  letterSpacing: '-0.035em',
});
