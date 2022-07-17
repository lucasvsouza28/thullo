import { FC, ButtonHTMLAttributes } from 'react';
import * as SC from './button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'save',
  size?: 'xs' | 'sm',
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'xs',
  children,
  ...props
}) => {
  return (
    <SC.Container
      variant={variant}
      size={size}
      {...props}
    >
      {children}
    </SC.Container>
  )
}

export default Button
