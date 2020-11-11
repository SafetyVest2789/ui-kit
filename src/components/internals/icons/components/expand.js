import React from 'react';
import { useTheme } from 'emotion-theming';
import { getIconStyles, iconPropTypes } from '../create-styled-icon';
import Expand from '../raw-components/expand';

const Component = (props) => {
  const theme = useTheme();
  return <Expand {...props} css={getIconStyles(props, theme)} />;
};

Component.displayName = 'ExpandIcon';

// we do this to enable treeshaking
// please see https://github.com/alex996/react-css-spinners/issues/1
if (process.env.NODE_ENV !== 'production') {
  Component.propTypes = iconPropTypes;
}

export default Component;
