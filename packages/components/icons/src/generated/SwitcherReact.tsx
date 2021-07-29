// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/switcher.react.svg

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

const SvgSwitcher = (props: Props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.77 10.996v.797-.797c-.424 0-.77-.387-.77-.863 0-2.659 2.056-4.11 4.49-4.11h11.035l-1.25-1.587a.94.94 0 01.069-1.22.714.714 0 011.087.076l2.377 3.023a.945.945 0 010 1.143l-2.377 3.024a.733.733 0 01-.578.292.721.721 0 01-.508-.216.94.94 0 01-.068-1.22l1.248-1.588H7.491c-1.6 0-2.95.66-2.95 2.382 0 .477-.345.864-.77.864zm15.69.99c0-.524.345-.78.77-.78.426 0 .77.256.77.779 0 2.924-2.056 4.348-4.49 4.348H5.475l1.248 1.918c.282.394.251 1.164-.067 1.512-.32.347-.806.309-1.087-.086L3.192 16.35a1.132 1.132 0 010-1.262l2.377-3.336c.152-.212.365-.343.578-.343.18 0 .362.036.509.195.318.347.35.863.067 1.256l-1.248 1.575H16.51c1.6 0 2.95-.552 2.95-2.448z"
      fillRule="evenodd"
    />
  </svg>
);

SvgSwitcher.displayName = 'SvgSwitcher';

const SwitcherIcon = (props: Props) => {
  const theme = useTheme();
  return <SvgSwitcher {...props} css={getIconStyles(props, theme)} />;
};

SwitcherIcon.displayName = 'SwitcherIcon';
export default SwitcherIcon;
