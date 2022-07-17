import styled from 'styled-components';

type SizeOptions = 'sm' | 'md';

const getSize = (size: SizeOptions) => {
  const sizes = new Map<SizeOptions, string>();
  sizes.set('sm', '28px');
  sizes.set('md', '32px');

  return sizes.get(size);
};

export const Container = styled.img<{ size: SizeOptions }>`
  height: ${({ size }) => getSize(size)};
  width: ${({ size }) => getSize(size)};
  object-fit: cover;

  border-radius: 8px;
`;

export const UserAbbreviaton = styled.span<{ size: SizeOptions }>`
  display: grid;
  place-items: center;

  background-color: #BDBDBD;
  color: #fff;

  padding: 6px 5px;

  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.035em;

  border-radius: 8px;

  height: ${({ size }) => getSize(size)};
  width: ${({ size }) => getSize(size)};
`;
