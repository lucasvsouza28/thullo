import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 68.31px;

  padding: 24px;

  box-shadow: 0px 2px 2px 0px #0000000D;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const BoardInfo = styled.div`
  display: flex;
  align-items: center;

  margin-left: 95px;
`;

export const CurrentBoard = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.035em;
`;

export const Divider = styled.div`
  height: 35px;
  width: 2px;

  background-color: #E0E0E0;

  margin: 0 24px;
`;

export const AllBoardsButton = styled.button`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;

  border: none;
  outline: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.elements.button.secondary};
  color: #828282;

  padding: 7px 16px;

  &:active {
    transform: scale(98%);
  }
`;

export const RightContainer = styled.div`
  display: flex;
  gap: 44px;
`;

export default Container;
