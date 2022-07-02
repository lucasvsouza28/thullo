import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  height: 34px;
  width: 338px;

  box-shadow: 0px 4px 12px 0px #0000001A;


  & input {
    padding: 9px 0 9px 13px;

    border: none;

    font-size: 10px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -0.035em;
    text-align: left;

    &:placeholder {
      color: #BDBDBD;
    }

    &:active, &:focus {
      border: none;
      outline: none;
    }
  }
`;

export const SearchButton = styled.button`
  cursor: pointer;

  height: 100%;
  width: 74px;

  border-radius: 8px;
  background: #2F80ED;

  font-size: 10px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.035em;

  color: #fff;

  border: none;
  outline: none;

  :active {
    border: none;
    outline: none;
    transform: scale(98%);
  }
`;
