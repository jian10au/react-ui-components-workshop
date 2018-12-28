import * as React from 'react';
import { css } from 'glamor';
import { Colors } from '../../styles/Colors';
import { darken, transparentize, lighten, padding } from 'polished'
import { Layout } from '../../styles/Layout';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  default?: boolean
  primary?: boolean
}

const style = color => css({
  WebkitAppearance: 'none',
  fontSize: '1.8rem',
  lineHeight: Layout.GridGap3,
  fontWeight: '500',
  color: Colors.UIWhite,
  backgroundColor: color,
  ...padding(Layout.GridGap2, Layout.GridGap4),
  border: '0',
  borderRadius: '3px',
  boxShadow: `0 2px 5px ${transparentize(0.7, darken(0.2, color))}`,
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: lighten(0.1, color),
    transform: 'scale(1.05)',
  },

  ':active': {
    backgroundColor: darken(0.1, color),
    transform: 'scale(0.95)',
    boxShadow: `inset 0 0 5px ${transparentize(0.3, darken(0.2, color))}`,
  }
});

const Button = (props: ButtonProps) => {
  const color = props.primary ? Colors.UIPink : Colors.UIBlue;

  return (
    <button className={`${style(color)}`}>{props.children}</button>
  )
};

export default Button;
