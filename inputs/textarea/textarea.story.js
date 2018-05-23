import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
// import withReadme from 'storybook-readme/with-readme';
import Section from '../../.storybook/decorators/section';
// import Readme from './README.md';
import TextArea from './textarea';

storiesOf('Inputs', module)
  .addDecorator(withKnobs)
  .add('TextArea', () => (
    <Section>
      <TextArea
        isDisabled={boolean('isDisabled', false)}
        isReadOnly={boolean('isReadOnly', false)}
        hasError={boolean('hasError', false)}
        hasWarning={boolean('hasWarning', false)}
      />
    </Section>
  ));

// .addDecorator(withReadme(Readme))