import React from 'react';
import { StyledInput } from './Input.styles';

interface IInputProps {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  type?: string;
}

const Input: React.FC<IInputProps> = props => (
  <StyledInput
    onChange={props.onChange}
    value={props.value}
    placeholder={props.placeholder}
    type={props.type || 'text'}
  />
);

export default Input;
