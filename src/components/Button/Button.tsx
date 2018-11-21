import * as React from 'react';
export interface ButtonProps extends React.HTMLProps<HTMLButtonElement>{

}

const Button = (props: ButtonProps) => (
  <button>{props.children}</button>
);

export default Button;
