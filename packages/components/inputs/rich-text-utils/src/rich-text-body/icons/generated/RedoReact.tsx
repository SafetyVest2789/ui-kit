// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/rich-text-body/icons/svg/redo.react.svg

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

const SvgRedo = (props: Props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        d="M12.458 7.41a8.524 8.524 0 00-6.7 3.246L3.796 8.693c-.437-.438-.795-.29-.795.33v7.335c0 .618.024.593.643.593h7.286c.619 0 .767-.358.33-.795l-2.243-2.243a6.283 6.283 0 015.697-3.64 6.283 6.283 0 016.277 6.085 8.542 8.542 0 00-8.531-8.948z"
        id="redo_react_svg__path-1"
      />
    </defs>
    <g
      id="redo_react_svg__Component-/-icon-/-24px-/-Richtext-/-Redo"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="redo_react_svg__Component-/-icon-/-12px-/-redo--"
        transform="matrix(-1 0 0 1 24 0)"
      >
        <mask id="redo_react_svg__mask-2" fill="#fff">
          <use xlinkHref="#redo_react_svg__path-1" />
        </mask>
        <use
          id="redo_react_svg__Shape"
          fill="#1A1A1A"
          xlinkHref="#redo_react_svg__path-1"
        />
      </g>
    </g>
  </svg>
);

SvgRedo.displayName = 'SvgRedo';

const RedoIcon = (props: Props) => {
  const theme = useTheme();
  return <SvgRedo {...props} css={getIconStyles(props, theme)} />;
};

RedoIcon.displayName = 'RedoIcon';
export default RedoIcon;
