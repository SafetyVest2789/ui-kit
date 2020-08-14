import React from 'react';
import {
  getIconStyles,
  iconPropTypes,
} from '../../../../../src/components/internals/icons/create-styled-icon';
import Box from '../raw-components/box';

const Component = (props) => (
  <Box {...props} css={(theme) => getIconStyles(props, theme)} />
);

Component.displayName = 'BoxIcon';

// we do this to enable treeshaking
// please see https://github.com/alex996/react-css-spinners/issues/1
if (process.env.NODE_ENV !== 'production') {
  Component.propTypes = iconPropTypes;
}

export default Component;