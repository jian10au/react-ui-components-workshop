import * as React from 'react';
import { css } from 'glamor';
import { Fonts } from '../../styles/Fonts';
import { Layout } from '../../styles/Layout';

type InputProps = { label: string } & React.HTMLProps<HTMLInputElement>;

const style = css({
  '> span': {
    display: 'block',
    fontSize: Fonts.Size.Default,
    marginBottom: Layout.GridGap
  },
  '> input': {
    width: '100%',
    fontSize: Fonts.Size.Default,
    lineHeight: Layout.GridGap3,
    padding: Layout.GridGap2,
    border: '1px solid hsl(0,0%,70%)',
    borderRadius: '3px'
  }
})

const Input = ({ label, ...inputProps }: InputProps) => {
  return (
    <label {...style}>
      <span>{label}</span>
      <input {...inputProps} />
    </label>
  )
}

export default Input;