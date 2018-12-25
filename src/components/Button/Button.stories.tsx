import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import Button from './Button';

storiesOf('ui', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Button', () =>
    <Button
      onClick={action('clicked')}
    >
      {text('Button', 'Button text')}
    </Button>
  );
