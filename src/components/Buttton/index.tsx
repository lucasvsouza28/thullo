import { FC, ButtonHTMLAttributes } from 'react';
import * as SC from './button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  children,
  ...props
}) => {
  return (
    <SC.Container
      variant={variant}
      {...props}
    >
      {children}
    </SC.Container>
  )
}

export default Button
