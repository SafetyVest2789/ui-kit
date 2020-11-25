// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/tree-structure.react.svg

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

const SvgTreeStructure = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="tree-structure_react_svg__Icons"
      stroke="none"
      strokeWidth={1}
      fillRule="evenodd"
    >
      <g
        id="tree-structure_react_svg__MC-icon-set"
        transform="translate(-168 -168)"
        fill="#000"
      >
        <g id="tree-structure_react_svg__Menu" transform="translate(24 168)">
          <g
            id="tree-structure_react_svg__Tree-Structure"
            transform="translate(144)"
          >
            <path
              d="M11.25 4.91V4.5H15v-.495C15 3.45 15.448 3 15.999 3H18.5c.552 0 .999.445.999 1.005v1.74c0 .555-.448 1.005-.999 1.005H16A.999.999 0 0115 5.745V5.22h-3.03v6.03H15v-.495c0-.555.448-1.005.999-1.005H18.5c.552 0 .999.445.999 1.005v1.74c0 .555-.448 1.005-.999 1.005H16A.999.999 0 0115 12.495v-.525h-3.03v6.78H15v-.495c0-.555.448-1.005.999-1.005H18.5c.552 0 .999.445.999 1.005v1.74c0 .555-.448 1.005-.999 1.005H16A.999.999 0 0115 19.995v-.525h-3.75v-7.5h-3v-.72h3V4.91zm-7.5 5.845c0-.555.448-1.005.999-1.005H7.25c.552 0 .999.445.999 1.005v1.74c0 .555-.448 1.005-.999 1.005H4.75a.999.999 0 01-.999-1.005v-1.74z"
              id="tree-structure_react_svg__shape"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

SvgTreeStructure.displayName = 'SvgTreeStructure';

const TreeStructureIcon = (props) => {
  const theme = useTheme();
  return <SvgTreeStructure {...props} css={getIconStyles(props, theme)} />;
};

TreeStructureIcon.propTypes = iconPropTypes;
export default TreeStructureIcon;
