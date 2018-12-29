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

  }
})

const Input = ({ label, ...inputProps }: InputProps) => {
  return (
    <label>
      <span>{label}</span>
      <input {...inputProps} />
    </label>
  )
}