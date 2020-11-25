// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/eye.react.svg

/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import invariant from 'tiny-invariant';
import { css, useTheme } from '@emotion/react';
import { customProperties as vars } from '@commercetools-uikit/design-system';
const iconSizes = {
  small: 12,
  medium: 16,
  big: 24,
};

const getSizeStyle = (size) => {
  switch (size) {
    case 'scale':
      return `
        &:not(:root) {
          width: 100%;
          height: auto;
        }
      `;

    case 'small':
    case 'medium':
    case 'big':
      return `
        width: ${iconSizes[size]}px;
        height: ${iconSizes[size]}px;
      `;

    default:
      return `
        width: ${iconSizes.big}px;
        height: ${iconSizes.big}px;
      `;
  }
};

const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

const getColor = (color, theme) => {
  if (!color) return 'inherit';
  const overwrittenVars = { ...vars, ...theme };
  const iconColor = overwrittenVars[`color${capitalize(color)}`];

  if (!iconColor) {
    invariant(
      color,
      `ui-kit/Icon: the specified color '${color}' is not supported.`
    );
    return 'inherit';
  }

  return iconColor;
};

const getIconStyles = (props, theme) => css`
  * {
    fill: ${getColor(props.color, theme)};
  }
  ${getSizeStyle(props.size)};
  flex-shrink: 0;
`;

const iconPropTypes = {
  color: PropTypes.oneOf([
    'solid',
    'neutral60',
    'surface',
    'info',
    'primary',
    'primary40',
    'warning',
    'error',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'big', 'scale']),
};

const SvgEye = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="eye_react_svg__Component-/-icon-/-24px-/-eye-"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
    >
      <path
        d="M3.535 11.65c0-2.454 4.772-5.73 8.756-5.73 3.98 0 8.7 3.27 8.7 5.73 0 2.47-4.72 5.79-8.7 5.79-3.984 0-8.756-3.326-8.756-5.79zm1.4 0c0 1.56 4.06 4.39 7.356 4.39 3.29 0 7.3-2.82 7.3-4.39 0-1.553-4.007-4.33-7.3-4.33-3.299 0-7.356 2.785-7.356 4.33zm7.282 3.16a3 3 0 110-6 3 3 0 010 6z"
        id="eye_react_svg__Shape"
        fill="#1A1A1A"
      />
    </g>
  </svg>
);

SvgEye.displayName = 'SvgEye';

const EyeIcon = (props) => {
  const theme = useTheme();
  return <SvgEye {...props} css={getIconStyles(props, theme)} />;
};

EyeIcon.propTypes = iconPropTypes;
export default EyeIcon;
