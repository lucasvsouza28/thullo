//import styled from "styled-components";
import { styled } from "../../../stitches.config";
import Button from "../Buttton";

export const Container = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  height: '68.31px',

  padding: '24px',
  marginBottom: '35px',

  boxShadow: '0px 2px 2px 0px #0000000D',

  // backgroundColor: ${({theme}) => theme.colors.elements.header},
}
);

export const LeftContainer = styled('div', {
  display: 'flex',
  flex: '1',
});

export const BoardInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',

  marginLeft: '95px',
});

export const CurrentBoard = styled('span', {
  fontWeight: '500',
  fontWize: '18px',
  lineHeight: '27px',
  letterSpacing: '-0.035em',
});

export const Divider = styled('div', {
  height: '35px',
  width: '2px',

  backgroundColor: '#E0E0E0',

  margin: '0 24px',
});

export const AllBoardsButton = styled(Button, {
  width: '108px',
});

export const RightContainer = styled('div', {
  display: 'flex',
  gap: '44px',
});

export default Container;
