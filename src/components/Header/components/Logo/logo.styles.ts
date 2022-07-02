import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.035em;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 32px;
  height: 29px;

  &:before{
    content: '';

    height: 100%;
    width: 14px;

    background-color: #2F80ED;

    border-radius: 4px;
  }

  &:after{
    content: '';

    height: 60%;
    width: 14px;

    background-color: #2F80ED;

    border-radius: 4px;
  }
`;
