import * as React from "react";
import { css } from "glamor";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

const buttonStyle = css({
  WebkitAppearance: "none"
});

const Button = (props: ButtonProps) => (
  <button className={`${buttonStyle}`}>{props.children}</button>
);

export default Button;
