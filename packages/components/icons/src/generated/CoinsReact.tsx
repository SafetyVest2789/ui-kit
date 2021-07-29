// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/coins.react.svg

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

const SvgCoins = (props: Props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 5.61v2.333c0 .052-.004.108-.012.167.008.055.012.111.012.167v2.334c0 .04-.002.081-.007.124.003.033.007.065.007.098v2.334c0 .04-.002.081-.007.125.003.032.007.065.007.097v2.334c0 .378-.178.937-1.027 1.46-.873.538-2.235.923-3.923 1.076v.132c0 .377-.167.936-1.016 1.46C13.865 20.57 11.817 21 9.536 21c-2.28 0-4.34-.43-5.509-1.15C3.178 19.327 3 18.768 3 18.39v-2.333c0-.033.004-.065.007-.098A1.214 1.214 0 013 15.834v-2.222c0-.056.004-.112.012-.167A1.219 1.219 0 013 13.278v-2.334c0-.377.178-.936 1.027-1.46.89-.547 2.296-.927 3.923-1.077V5.61c0-.377.176-.936 1.025-1.46C10.143 3.43 12.2 3 14.48 3c2.28 0 4.334.43 5.503 1.15C20.833 4.673 21 5.232 21 5.61zm-1.503 10.818c.383-.236.603-.493.603-.705v-1.18c0 .028-.083.056-.127.084-.873.537-2.235.923-3.923 1.076v.131c0 .04-.002.082-.007.125.003.033.007.065.007.098v1.309c1.462-.144 2.701-.479 3.447-.938zm-4.94 2.668c.384-.236.593-.494.593-.705v-1.18c0 .028-.072.056-.116.083-1.169.72-3.217 1.15-5.498 1.15-2.28 0-4.34-.43-5.509-1.15a3.633 3.633 0 01-.127-.083v1.18c0 .211.217.469.6.705 1.017.626 2.943 1.015 5.03 1.015 2.089 0 4.011-.39 5.028-1.015zM8.85 6.986v1.363c.226-.008.453-.014.685-.014 2.28 0 4.339.43 5.507 1.15.085.052.16.105.232.158 1.784-.085 3.355-.454 4.234-.995.383-.236.592-.493.592-.705v-.957c0 .028-.072.055-.116.083-1.169.72-3.217 1.15-5.498 1.15-2.28 0-4.34-.43-5.509-1.15a3.684 3.684 0 01-.127-.083zm10.647 4.33c.383-.237.603-.494.603-.705V9.32c0 .028-.077.055-.122.083-.901.555-2.33.939-4.006 1.084.066.169.078.324.078.457v1.31c1.462-.145 2.701-.48 3.447-.938zM3.9 12.32v.957c0 .212.217.469.6.705 1.017.626 2.943 1.015 5.03 1.015 2.089 0 4.011-.389 5.028-1.015.383-.236.592-.493.592-.705v-.957c0 .027-.072.055-.116.083-1.169.72-3.217 1.15-5.498 1.15-2.28 0-4.34-.43-5.509-1.15a3.633 3.633 0 01-.127-.083zm0 3.513c0 .212.217.47.6.705 1.017.627 2.943 1.016 5.03 1.016 2.089 0 4.011-.39 5.028-1.016.383-.236.592-.493.592-.705v-1.18c0 .029-.072.056-.116.084-1.169.72-3.217 1.15-5.498 1.15-2.28 0-4.34-.43-5.509-1.15a3.633 3.633 0 01-.127-.083v1.18zm15.597-1.962c.383-.236.603-.493.603-.705v-1.18c0 .028-.083.056-.127.083-.873.538-2.235.923-3.923 1.076v.132c0 .052-.004.108-.012.167.008.055.012.111.012.167v1.197c1.462-.144 2.701-.478 3.447-.937z"
      fillRule="evenodd"
    />
  </svg>
);

SvgCoins.displayName = 'SvgCoins';

const CoinsIcon = (props: Props) => {
  const theme = useTheme();
  return <SvgCoins {...props} css={getIconStyles(props, theme)} />;
};

CoinsIcon.displayName = 'CoinsIcon';
export default CoinsIcon;
