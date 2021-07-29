// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/brain.react.svg

/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Theme } from '@emotion/react';
import React from 'react';
import { warning } from '@commercetools-uikit/utils';
import { css, useTheme } from '@emotion/react';
import { customProperties as vars } from '@commercetools-uikit/design-system';
export type Props = {
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

const getSizeDimensions = (size: Props['size']) => {
  switch (size) {
    case 'scale':
      return {
        width: '100%',
        height: 'auto',
      };

    case 'small':
    case 'medium':
    case 'big':
      return {
        width: `${iconSizes[size]}px`,
        height: `${iconSizes[size]}px`,
      };

    default:
      return {
        width: `${iconSizes.big}px`,
        height: `${iconSizes.big}px`,
      };
  }
};

const getSizeStyle = (size: Props['size']) => {
  const dimensions = getSizeDimensions(size);

  switch (size) {
    case 'scale':
      return `
        &:not(:root) {
          width: ${dimensions.width};
          height: ${dimensions.height};
        }
      `;

    default:
      return `
        width: ${dimensions.width};
        height: ${dimensions.height};
      `;
  }
};

const getColor = (color: Props['color'], theme: Theme) => {
  if (!color) return 'inherit';
  const overwrittenVars = { ...vars, ...theme };
  let iconColor;

  switch (color) {
    case 'solid':
      iconColor = overwrittenVars.colorSolid;
      break;

    case 'neutral60':
      iconColor = overwrittenVars.colorNeutral60;
      break;

    case 'surface':
      iconColor = overwrittenVars.colorSurface;
      break;

    case 'info':
      iconColor = overwrittenVars.colorInfo;
      break;

    case 'primary':
      iconColor = overwrittenVars.colorPrimary;
      break;

    case 'primary40':
      iconColor = overwrittenVars.colorPrimary40;
      break;

    case 'warning':
      iconColor = overwrittenVars.colorWarning;
      break;

    case 'error':
      iconColor = overwrittenVars.colorError;
      break;

    default:
      break;
  }

  if (!iconColor) {
    warning(
      color,
      `ui-kit/Icon: the specified color '${color}' is not supported.`
    );
    return 'inherit';
  }

  return iconColor;
};

export const getIconStyles = (props: Props, theme: Theme) => css`
  *:not([fill='none']) {
    fill: ${getColor(props.color, theme)};
  }
  &,
  image {
    ${getSizeStyle(props.size)};
  }
  flex-shrink: 0;
`;

const SvgBrain = (props: Props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.298 3L12.15 4.074 10.003 3 5.1 5.675v2.322L3 9.332v5.786L5.1 16.263v2.099l4.904 2.675 2.147-1.075 2.148 1.075 4.904-2.675v-2.323l2.099-1.335V8.918l-2.1-1.144v-2.1L14.299 3zm-1.202 15.823V5.213l1.172-.586L17.76 6.53V8.63l2.099 1.145v4.137l-2.099 1.336v2.257l-3.492 1.905-1.172-.587zM9.315 8.013l-.546.545v7.274l.3.3c.12-.088.26-.151.422-.151a.721.721 0 110 1.442c-.333 0-.6-.23-.684-.534l-.759-.759v-3.394H6.495a.71.71 0 01-.61.36.72.72 0 110-1.442.71.71 0 01.61.36h1.553V8.26l.757-.756c-.015-.058-.036-.114-.036-.176a.72.72 0 11.722.721c-.063 0-.119-.02-.176-.035zM6.54 17.505v-2.098l-2.1-1.145v-4.138l2.1-1.335V6.531l3.491-1.904 1.174.587v13.61l-1.174.586-3.49-1.905zm10.993-6.212a.71.71 0 01.61-.36.721.721 0 110 1.442.71.71 0 01-.61-.36H15.98v3.754l-.757.757c.015.058.036.114.036.176a.721.721 0 11-.721-.721c.062 0 .117.02.175.035l.546-.545V8.197l-.3-.3a.707.707 0 01-.421.151.72.72 0 110-1.442c.331 0 .599.228.683.533l.759.76v3.394h1.553z"
      fillRule="evenodd"
    />
  </svg>
);

SvgBrain.displayName = 'SvgBrain';

const BrainIcon = (props: Props) => {
  const theme = useTheme();
  return <SvgBrain {...props} css={getIconStyles(props, theme)} />;
};

BrainIcon.displayName = 'BrainIcon';
export default BrainIcon;
