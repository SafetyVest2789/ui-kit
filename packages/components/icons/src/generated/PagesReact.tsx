// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/pages.react.svg

/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Theme } from '@emotion/react';
import React from 'react';
import invariant from 'tiny-invariant';
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
    invariant(
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

const SvgPages = (props: Props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="pages_react_svg__Icons"
      stroke="none"
      strokeWidth={1}
      fillRule="evenodd"
    >
      <g id="pages_react_svg__MC-icon-set" transform="translate(-24 -264)">
        <g id="pages_react_svg__Menu" transform="translate(24 168)">
          <g id="pages_react_svg__Pages" transform="translate(0 96)">
            <path
              d="M7.737 18.058a.325.325 0 01-.322-.327V6.253c0-.181.146-.327.322-.327h8.526c.175 0 .32.146.32.327v.746H9.35a.851.851 0 00-.852.851v10.208h-.763zM6.5 6.253v9.813h-.763a.325.325 0 01-.322-.326V4.26c0-.18.146-.327.322-.327h8.526c.175 0 .32.147.32.327v.732H7.736A1.25 1.25 0 006.5 6.253zm12.15.746H17.5v-.746a1.25 1.25 0 00-1.238-1.261H15.5V4.26A1.25 1.25 0 0014.262 3H5.736A1.25 1.25 0 004.5 4.26v11.48c0 .693.554 1.26 1.237 1.26H6.5v.731c0 .696.554 1.26 1.237 1.26h.762v1.158c0 .469.381.85.851.85h9.3a.85.85 0 00.85-.85V7.85a.851.851 0 00-.85-.851z"
              id="pages_react_svg__shape"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

SvgPages.displayName = 'SvgPages';

const PagesIcon = (props: Props) => {
  const theme = useTheme();
  return <SvgPages {...props} css={getIconStyles(props, theme)} />;
};

PagesIcon.displayName = 'PagesIcon';
export default PagesIcon;