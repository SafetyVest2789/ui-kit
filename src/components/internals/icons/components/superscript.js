import React from 'react';
import { useTheme } from 'emotion-theming';
import { getIconStyles, iconPropTypes } from '../create-styled-icon';
import Superscript from '../raw-components/superscript';

const Component = (props) => {
  const theme = useTheme();
  return <Superscript {...props} css={getIconStyles(props, theme)} />;
};

Component.displayName = 'SuperscriptIcon';

// we do this to enable treeshaking
// please see https://github.com/alex996/react-css-spinners/issues/1
if (process.env.NODE_ENV !== 'production') {
  Component.propTypes = iconPropTypes;
}

export default Component;
