// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/pages.react.svg

/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Theme } from '@emotion/react';
import { warning } from '@commercetools-uikit/utils';
import { css, ClassNames, useTheme } from '@emotion/react';
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
export type SVGProps = Props & {
  className: string;
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

const SvgPages = (props: SVGProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.737 18.058a.325.325 0 0 1-.322-.327V6.253c0-.181.146-.327.322-.327h8.526c.175 0 .32.146.32.327v.746H9.35a.851.851 0 0 0-.852.851v10.208h-.763ZM6.5 6.253v9.813h-.763a.325.325 0 0 1-.322-.326V4.26c0-.18.146-.327.322-.327h8.526c.175 0 .32.147.32.327v.732H7.736A1.25 1.25 0 0 0 6.5 6.253Zm12.15.746H17.5v-.746a1.25 1.25 0 0 0-1.238-1.261H15.5V4.26A1.25 1.25 0 0 0 14.262 3H5.736A1.25 1.25 0 0 0 4.5 4.26v11.48c0 .693.554 1.26 1.237 1.26H6.5v.731c0 .696.554 1.26 1.237 1.26h.762v1.158c0 .469.381.85.851.85h9.3a.85.85 0 0 0 .85-.85V7.85a.851.851 0 0 0-.85-.851Z"
      fillRule="evenodd"
    />
  </svg>
);

SvgPages.displayName = 'SvgPages';

const PagesIcon = (props: Props) => {
  const theme = useTheme();
  return (
    <ClassNames>
      {({ css: createClass }) => (
        <SvgPages
          {...props}
          className={createClass(getIconStyles(props, theme))}
        />
      )}
    </ClassNames>
  );
};

PagesIcon.displayName = 'PagesIcon';
export default PagesIcon;
