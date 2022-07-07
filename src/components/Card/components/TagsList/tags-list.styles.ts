import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Tag = styled.span<{ color: string, background: string }>`
  display: grid;
  place-items: center;

  height: 18px;

  border-radius: 8px;

  color: ${({ color }) => color};
  background-color: ${({ background }) => background};

  padding: 2px 9px;

  font-family: Noto Sans;
  font-size: 10px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.035em;
`;
