import React from 'react';
import { useTheme } from 'emotion-theming';
import {
  getIconStyles,
  iconPropTypes,
} from '../../../../../src/components/internals/icons/create-styled-icon';
import Sorting from '../raw-components/sorting';

const Component = (props) => {
  const theme = useTheme();
  return <Sorting {...props} css={getIconStyles(props, theme)} />;
};

Component.displayName = 'SortingIcon';

// we do this to enable treeshaking
// please see https://github.com/alex996/react-css-spinners/issues/1
if (process.env.NODE_ENV !== 'production') {
  Component.propTypes = iconPropTypes;
}

export default Component;
