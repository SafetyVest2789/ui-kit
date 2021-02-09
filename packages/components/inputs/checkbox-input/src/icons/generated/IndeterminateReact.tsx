// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/icons/svg/indeterminate.react.svg

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

const SvgIndeterminate = (props: Props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="indeterminate_react_svg__ATOM---Checkboxes---Radio-buttons"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="indeterminate_react_svg__Checkboxes-Radio-Buttons"
        transform="translate(-177 -909)"
      >
        <g
          id="indeterminate_react_svg__checkbox-indeterminate-default"
          transform="translate(177 908)"
        >
          <rect
            id="indeterminate_react_svg__background"
            fill="#FFF"
            x={0}
            y={1}
            width={16}
            height={16}
            rx={4}
          />
          <g
            id="indeterminate_react_svg__borderAndContent"
            transform="translate(0 .5)"
          >
            <rect
              id="indeterminate_react_svg__border"
              stroke="#AFAFAF"
              x={0.5}
              y={1}
              width={15}
              height={15}
              rx={4}
            />
            <path
              id="indeterminate_react_svg__content"
              fill="#00B6A1"
              d="M3 7.5h10v2H3z"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

SvgIndeterminate.displayName = 'SvgIndeterminate';

const IndeterminateIcon = (props: Props) => {
  const theme = useTheme();
  return <SvgIndeterminate {...props} css={getIconStyles(props, theme)} />;
};

IndeterminateIcon.displayName = 'IndeterminateIcon';
export default IndeterminateIcon;