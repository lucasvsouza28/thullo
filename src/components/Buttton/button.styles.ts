import styled from 'styled-components';

type ButtonProps = {
  variant: 'primary' | 'secondary'
}

export const Container = styled.button<ButtonProps>`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;

  border: none;
  outline: none;
  border-radius: 8px;

  padding: 7px 8px;

  min-width: 32px;
  height: 32px;

  ${props => props.variant === 'primary' && `background-color: ${props.theme.colors.elements.button.primary};`}
  ${props => props.variant === 'secondary' && `background-color: ${props.theme.colors.elements.button.secondary};`}

  ${props => props.variant === 'primary' && 'color: #FFF;'}
  ${props => props.variant === 'secondary' && 'color: #828282;'}

  &:active {
    transform: scale(98%);
  }

  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.035em;
`;
