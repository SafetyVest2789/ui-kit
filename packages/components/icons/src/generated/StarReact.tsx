// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/star.react.svg

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

const SvgStar = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      className="star_react_svg__st0"
      d="M9.1 9 12 3l2.9 6 6.6.9-4.9 4.5 1.3 6.6-5.9-3.2L6.1 21l1.3-6.6-4.9-4.5z"
    />
  </svg>
);

SvgStar.displayName = 'SvgStar';

const StarIcon = (props: Props) => {
  const theme = useTheme();
  return (
    <ClassNames>
      {({ css: createClass }) => (
        <SvgStar
          {...props}
          className={createClass(getIconStyles(props, theme))}
        />
      )}
    </ClassNames>
  );
};

StarIcon.displayName = 'StarIcon';
export default StarIcon;
