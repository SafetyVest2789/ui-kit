// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/filter-and-list.react.svg

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

const SvgFilterAndList = (props: SVGProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.25 18a.75.75 0 1 1 0 1.5h-4.5a.75.75 0 1 1 0-1.5h4.5ZM18.026 3c.35 0 .586.216.685.508.068.229.052.546-.085.804l-.097.148-5.503 6.601v9.05c0 .375-.145.639-.436.79a.736.736 0 0 1-.188.06l-.09.008c-.162 0-.301-.055-.419-.164l-.084-.092-2.858-3.427a.893.893 0 0 1-.198-.434l-.014-.169v-5.622L3.236 4.459c-.23-.258-.283-.687-.197-.967.12-.297.327-.446.574-.483L3.739 3h14.287Zm-1.484 1.498L5.22 4.495l5.02 6.023-.005 5.965 1.29 1.549v-7.514l5.017-6.02ZM20.25 13.5a.75.75 0 1 1 0 1.5h-4.5a.75.75 0 1 1 0-1.5h4.5Zm0-4.5a.75.75 0 1 1 0 1.5h-4.5a.75.75 0 1 1 0-1.5h4.5Z"
      fillRule="nonzero"
    />
  </svg>
);

SvgFilterAndList.displayName = 'SvgFilterAndList';

const FilterAndListIcon = (props: Props) => {
  const theme = useTheme();
  return (
    <ClassNames>
      {({ css: createClass }) => (
        <SvgFilterAndList
          {...props}
          className={createClass(getIconStyles(props, theme))}
        />
      )}
    </ClassNames>
  );
};

FilterAndListIcon.displayName = 'FilterAndListIcon';
export default FilterAndListIcon;
