import React from 'react';
import { ButtonStyles } from './ButtonStyles';

type ButtonProps = {
  children: string;
};

const Button = ({ children }: ButtonProps) => {
  return <ButtonStyles>{children}</ButtonStyles>;
};

export default Button;
