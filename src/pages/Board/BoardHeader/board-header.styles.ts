import { styled } from "../../../../stitches.config";

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const BoardVisibilityContainer = styled('div', {
  position: 'absolute',
  top: '40px',
  zIndex: '3',

  width: '234px',

  padding: '9px 12px',

  backgroundColor: '#FFF',
  boxShadow: '0px 2px 4px 0px #0000000D',

  border: '1px solid #E0E0E0',
  borderRadius: '$12',

  '> h5' : {
    fontFamily: '$Poppins',
    fontSize: '12px',
    fontWweight: '600',
    lineHeight: '18px',
    letterSpacing: '-0.035em',
  },

  '> p' : {
    fontFamily: '$Noto-Sans',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
    letterSpacing: '-0.035em',
    marginBottom: '15px',
    color: '#828282',
  },
});

export const BoardVisibilitySelectList = styled('ul', {
});

export const BoardVisibilityOption = styled('li', {
  cursor: 'pointer',

  listStyle: 'none',
  listStyleType: 'none',

  display: 'flex',
  flexDirection: 'column',
  gap: '8px',

  padding: '8px 12px',

  borderRadius: '$8',

  'div' : {
    display: 'flex',
    alignItems: 'start',
    gap: 8,
  },

  'h6' : {
    display: 'inline-block',
    fontFamily: '$Noto-Sans',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '16px',
    letterSpacing: '-0.035em',
  },

  '&:hover' : {
    backgroundColor: '#F2F2F2',
  },

  variants: {
    selected: {
      true: {
        backgroundColor: '#F2F2F2',
      },
    }
  }
});


export const BoardVisibilityOptionDescription = styled('p', {
  fontFamily: '$Noto-Sans',
  fontSize: '10px',
  fontWeight: '400',
  lineHeight: '14px',
  letterSpacing: '-0.035em',

  color: '#828282',
});
