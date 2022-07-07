import styled from 'styled-components';

export const UsersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  margin-top: 21px;
`;

export const UserAvatar = styled.img`
  height: 28px;
  width: 28px;
  object-fit: cover;

  border-radius: 8px;
`;

export const UserAbbreviaton = styled.span`
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

  width: 28px;
  height: 28px;
`;

export const MoreUsersCaption = styled.span`
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.035em;

  color: #BDBDBD;
`;
