// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/angle-right.react.svg

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

const SvgAngleRight = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="angle-right_react_svg__Icons"
      stroke="none"
      strokeWidth={1}
      fillRule="evenodd"
    >
      <g
        id="angle-right_react_svg__MC-icon-set"
        transform="translate(-96 -888)"
        fill="#000"
      >
        <g id="angle-right_react_svg__Directions" transform="translate(24 888)">
          <g id="angle-right_react_svg__Angle-Right" transform="translate(72)">
            <path
              d="M21.11 7.797l-.902-.909a.567.567 0 00-.415-.182.567.567 0 00-.414.182l-7.087 7.146-7.087-7.146a.567.567 0 00-.415-.182.567.567 0 00-.414.182l-.902.91a.576.576 0 000 .836l8.403 8.474c.12.12.258.181.415.181.156 0 .294-.06.414-.181l8.404-8.474a.577.577 0 000-.837z"
              id="angle-right_react_svg__shape"
              transform="rotate(-90 12.292 11.998)"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

SvgAngleRight.displayName = 'SvgAngleRight';

const AngleRightIcon = (props) => {
  const theme = useTheme();
  return <SvgAngleRight {...props} css={getIconStyles(props, theme)} />;
};

AngleRightIcon.propTypes = iconPropTypes;
export default AngleRightIcon;
