import styled from 'styled-components';

export const Container = styled.div`
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

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Tag = styled.span`
  display: grid;
  place-items: center;

  height: 18px;

  border-radius: 8px;

  background-color: ${({theme}) => theme.colors.elements.badge.blue};

  padding: 2px 9px;

  font-family: Noto Sans;
  font-size: 10px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.035em;
`;

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
