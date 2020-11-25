// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/info.react.svg

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

const SvgInfo = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="info_react_svg__Icons"
      stroke="none"
      strokeWidth={1}
      fillRule="evenodd"
    >
      <g
        id="info_react_svg__MC-icon-set"
        transform="translate(-96 -312)"
        fill="#000"
      >
        <g id="info_react_svg__Notices" transform="translate(24 312)">
          <g id="info_react_svg__Info" transform="translate(72)">
            <path
              d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 4.5a1.125 1.125 0 110 2.25 1.125 1.125 0 010-2.25zm1.688 9h-3.376a.562.562 0 110-1.125h.563V12h-.563a.562.562 0 110-1.125h2.25c.311 0 .563.252.563.563v3.937h.563a.563.563 0 010 1.125z"
              id="info_react_svg__shape"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

SvgInfo.displayName = 'SvgInfo';

const InfoIcon = (props) => {
  const theme = useTheme();
  return <SvgInfo {...props} css={getIconStyles(props, theme)} />;
};

InfoIcon.propTypes = iconPropTypes;
export default InfoIcon;
