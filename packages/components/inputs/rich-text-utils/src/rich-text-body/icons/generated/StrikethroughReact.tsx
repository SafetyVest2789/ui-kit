// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/rich-text-body/icons/svg/strikethrough.react.svg

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

const SvgStrikethrough = (props: Props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="strikethrough_react_svg__Component-/-icon-/-24px-/-Richtext-/-Strike-trough"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="strikethrough_react_svg__Component-/-icon-/-16px-/-Richtext-/-Strike-trough"
        fill="#1A1A1A"
      >
        <path
          d="M11.648 3c1.704 0 3.27.312 4.7.938l-.621 1.734c-1.415-.594-2.79-.89-4.125-.89-1.055 0-1.88.226-2.473.679-.594.453-.89 1.082-.89 1.887 0 .593.109 1.08.327 1.459.22.379.588.726 1.108 1.043.52.316 1.314.666 2.385 1.048.99.353 1.81.72 2.459 1.102H19.5v1.25l-3.493-.002c.516.69.774 1.548.774 2.572 0 1.508-.547 2.684-1.64 3.528-1.094.843-2.578 1.265-4.454 1.265-2.03 0-3.593-.261-4.687-.785v-1.922c.703.297 1.469.531 2.297.703.828.172 1.648.258 2.46.258 1.329 0 2.329-.252 3-.756.673-.504 1.009-1.205 1.009-2.103 0-.594-.12-1.08-.358-1.46-.238-.378-.637-.728-1.195-1.048-.14-.08-.3-.164-.478-.25H4.5V12h5.137c-1.066-.476-1.863-1.016-2.389-1.617-.684-.781-1.025-1.801-1.025-3.059 0-1.32.496-2.37 1.488-3.152C8.703 3.39 10.016 3 11.648 3z"
          id="strikethrough_react_svg__Combined-Shape"
        />
      </g>
    </g>
  </svg>
);

SvgStrikethrough.displayName = 'SvgStrikethrough';

const StrikethroughIcon = (props: Props) => {
  const theme = useTheme();
  return <SvgStrikethrough {...props} css={getIconStyles(props, theme)} />;
};

StrikethroughIcon.displayName = 'StrikethroughIcon';
export default StrikethroughIcon;