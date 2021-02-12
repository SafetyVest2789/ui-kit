// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/tree-structure.react.svg

/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Theme } from '@emotion/react';
import React from 'react';
import { warning } from '@commercetools-uikit/utils';
import { css, useTheme } from '@emotion/react';
import { customProperties as vars } from '@commercetools-uikit/design-system';
type Props = {
  color?:
    | 'solid'
    | 'neutral60'
    | 'surface'
    | 'info'
    | 'primary'
    | 'primary40'
    | 'warning'
    | 'error';
  size?: 'small' | 'medium' | 'big' | 'scale';
};
const iconSizes = {
  small: 12,
  medium: 16,
  big: 24,
} as const;

const getSizeStyle = (size: Props['size']) => {
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

const capitalize = (value: string) => value[0].toUpperCase() + value.slice(1);

const getColor = (color: Props['color'], theme: Theme) => {
  if (!color) return 'inherit';
  const overwrittenVars = { ...vars, ...theme }; // @ts-expect-error

  const iconColor = overwrittenVars[`color${capitalize(color)}`];

  if (!iconColor) {
    warning(
      color,
      `ui-kit/Icon: the specified color '${color}' is not supported.`
    );
    return 'inherit';
  }

  return iconColor;
};

const getIconStyles = (props: Props, theme: Theme) => css`
  * {
    fill: ${getColor(props.color, theme)};
  }
  ${getSizeStyle(props.size)};
  flex-shrink: 0;
`;

const SvgTreeStructure = (props: Props) => (
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

const TreeStructureIcon = (props: Props) => {
  const theme = useTheme();
  return <SvgTreeStructure {...props} css={getIconStyles(props, theme)} />;
};

TreeStructureIcon.displayName = 'TreeStructureIcon';
export default TreeStructureIcon;
