import React from 'react';
import { PasswordField } from '../../../../dist/ui-kit.esm';
import { Suite, Spec, screenshot } from '../../../../test/percy';

const value = 'hello world, how are you?';

screenshot('PasswordField', () => (
  <Suite>
    <Spec label="minimal">
      <PasswordField
        title="Welcome Text"
        value={value}
        onChange={() => {}}
        horizontalConstraint="m"
      />
    </Spec>
    <Spec label="when required">
      <PasswordField
        title="Welcome Text"
        isRequired={true}
        value={value}
        onChange={() => {}}
        horizontalConstraint="m"
      />
    </Spec>
    <Spec label="when disabled">
      <PasswordField
        title="Welcome Text"
        isDisabled={true}
        value={value}
        onChange={() => {}}
        horizontalConstraint="m"
      />
    </Spec>
    <Spec label="when placeholder is shown">
      <PasswordField
        title="Welcome Text"
        value=""
        placeholder="Enter a text"
        onChange={() => {}}
        horizontalConstraint="m"
      />
    </Spec>
    <Spec label="when placeholder is shown and disabled">
      <PasswordField
        title="Welcome Text"
        isDisabled={true}
        value=""
        placeholder="Enter a text"
        onChange={() => {}}
        horizontalConstraint="m"
      />
    </Spec>
    <Spec label="with error when not touched">
      <PasswordField
        title="Welcome Text"
        value={value}
        onChange={() => {}}
        horizontalConstraint="m"
        errors={{ missing: true }}
      />
    </Spec>
    <Spec label="with error when touched">
      <PasswordField
        title="Welcome Text"
        value={value}
        onChange={() => {}}
        horizontalConstraint="m"
        errors={{ missing: true }}
        touched={true}
      />
    </Spec>
  </Suite>
));
