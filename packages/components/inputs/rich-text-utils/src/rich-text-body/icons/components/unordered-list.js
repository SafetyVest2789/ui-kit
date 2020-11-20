/*
THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

This file is created by the 'scripts/generate-icon-exports.js' script.
*/

import React from 'react';
import { useTheme } from '@emotion/react';
import { getIconStyles, iconPropTypes } from '../create-styled-icon';
import UnorderedList from '../raw-components/unordered-list';

const Component = (props) => {
  const theme = useTheme();
  return <UnorderedList {...props} css={getIconStyles(props, theme)} />;
};

Component.displayName = 'UnorderedListIcon';

// we do this to enable treeshaking
// please see https://github.com/alex996/react-css-spinners/issues/1
if (process.env.NODE_ENV !== 'production') {
  Component.propTypes = iconPropTypes;
}

export default Component;