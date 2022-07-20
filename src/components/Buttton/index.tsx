import { FC, ButtonHTMLAttributes } from 'react';
import * as SC from './button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'save' | 'outlined',
  color?: 'gray' | 'red',
  size?: 'xs' | 'sm',
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'xs',
  color,
  children,
  ...props
}) => {
  return (
    <SC.Container
      variant={variant}
      size={size}
      color={color}
      {...props}
    >
      {children}
    </SC.Container>
  )
}

export default Button
