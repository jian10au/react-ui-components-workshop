/** @jsx jsx */
import * as React from "react";
import { jsx, css } from "@emotion/core";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

const buttonStyle = css({
  WebkitAppearance: "none"
});

const Button = (props: ButtonProps) => <button css={buttonStyle}>{props.children}</button>;

export default Button;
