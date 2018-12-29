import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import Input from './Input';

const StatefulInput = (props: { defaultValue: string, label: string }) => {
  const [value, setValue] = React.useState(() => props.defaultValue);
  // Make sure current `value` is updated to match a new `defaultValue`;
  React.useMemo(() => setValue(props.defaultValue), [props.defaultValue]);
  return <Input label={props.label} value={value} onChange={e => setValue(e.currentTarget.value)} />
}

storiesOf('ui', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Input', () => <StatefulInput defaultValue={text('value', 'James')} label={text('label', 'First Name')} />);
