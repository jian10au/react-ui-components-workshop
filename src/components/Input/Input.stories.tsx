import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import Input from './Input';

storiesOf('ui', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Input', () => {
    const defaultValue = text('value', 'James');
    const [value, setValue] = React.useState(defaultValue);
    return <Input label={text('label', 'First Name')} value={value} onChange={e => setValue(e.currentTarget.value)} />
  });
