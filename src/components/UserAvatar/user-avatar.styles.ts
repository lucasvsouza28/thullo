import { styled } from '../../../stitches.config';

type SizeOptions = 'sm' | 'md';

export const Container = styled('img', {
  objectFit: 'cover',

  borderRadius: '$8',

  variants: {
    size: {
      sm: {
        height: '28px',
        width: '28px',
      },
      md: {
        height: '32px',
        width: '32px',
      }
    }
  }
});

export const UserAbbreviaton = styled('span', {
  display: 'grid',
  placeItems: 'center',

  backgroundColor: '#BDBDBD',
  color: '#fff',

  padding: '6px 5px',

  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '18px',
  letterSpacing: '-0.035em',

  borderRadius: '$8',

  variants: {
    size: {
      sm: {
        height: '28px',
        width: '28px',
      },
      md: {
        height: '32px',
        width: '32px',
      }
    }
  }
});
