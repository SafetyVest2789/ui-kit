import React from 'react';
import { useTheme } from 'emotion-theming';
import {
  getIconStyles,
  iconPropTypes,
} from '../../../../../src/components/internals/icons/create-styled-icon';
import Warning from '../raw-components/warning';

const Component = (props) => {
  const theme = useTheme();
  return <Warning {...props} css={getIconStyles(props, theme)} />;
};

Component.displayName = 'WarningIcon';

// we do this to enable treeshaking
// please see https://github.com/alex996/react-css-spinners/issues/1
if (process.env.NODE_ENV !== 'production') {
  Component.propTypes = iconPropTypes;
}

export default Component;
