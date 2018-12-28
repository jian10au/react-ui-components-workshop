import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Button from './Button';
import { Fragment } from 'react';

storiesOf('ui', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Button', () =>
    <Fragment>
      <Button
        primary={boolean('primary', true)}
        onClick={action('clicked')}
      >
        {text('Button', 'Button text')}
      </Button>

      <hr />

      <div>
        <Button>Default Button</Button>
        <Button primary>Primary Button</Button>
      </div>
    </Fragment>
  );
