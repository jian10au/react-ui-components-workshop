import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import Input from './Input';

storiesOf('ui', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Input', () =>
    <Input
      label={text('label', 'First Name')}
    />
  );
