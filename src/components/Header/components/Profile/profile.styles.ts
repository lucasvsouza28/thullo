import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 14px;
`;

export const ProfileImage = styled.img`
  height: 32px;
  width: 32px;

  border-radius: 8px;
`;

export const Name = styled.span`
  /* font-family: Noto Sans; */
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.035em;
  text-align: left;
`;
