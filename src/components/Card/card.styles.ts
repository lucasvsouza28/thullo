import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 12px;

  border-radius: 8px;

  padding: 12px 12px 18px;

  background-color: ${({ theme }) => theme.colors.elements.board_card};

  width: 243px;
  min-height: 243px;

  box-shadow: 0px 4px 12px 0px #0000000D;
`;

export const Image = styled.img`
  width: 100%;
  height: 130px;
  object-fit: cover;

  border-radius: 12px;

`;

export const Title = styled.span`
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.035em;
`;
