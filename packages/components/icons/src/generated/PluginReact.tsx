// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file is created with 'yarn generate-icons'.
// Original SVG file: src/svg/plugin.react.svg

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

const SvgPlugin = (props: SVGProps) => (
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
        d="M21.17 11.423a2.046 2.046 0 0 0-1.97-1.47 2.175 2.175 0 0 0-.911.206.43.43 0 0 1-.4-.047.394.394 0 0 1-.164-.324V4.956a.23.23 0 0 0-.206-.206H3.456a.223.223 0 0 0-.206.206v4.832c0 .096.049.185.13.236a.153.153 0 0 0 .17 0 2.193 2.193 0 0 1 1.005-.23 2.21 2.21 0 0 1 0 4.421 2.352 2.352 0 0 1-.993-.229.276.276 0 0 0-.224.035.218.218 0 0 0-.088.183v4.832c.008.11.096.198.206.206h4.833c.07 0 .136-.036.176-.094a.259.259 0 0 0 .035-.23 2.099 2.099 0 0 1-.23-.981 2.21 2.21 0 0 1 .86-1.752 2.246 2.246 0 0 1 1.963-.4 2.222 2.222 0 0 1 1.605 2.134 2.352 2.352 0 0 1-.23.994.241.241 0 0 0 .036.217c.04.059.106.094.176.095h4.839a.23.23 0 0 0 .206-.206v-4.833a.435.435 0 0 1 .223-.388.335.335 0 0 1 .353 0c.279.14.587.211.9.206a2.058 2.058 0 0 0 1.969-2.599v.018Z"
        id="plugin_react_svg__a"
      />
      <path
        d="M21.17 11.423a2.046 2.046 0 0 0-1.97-1.47 2.175 2.175 0 0 0-.911.206.43.43 0 0 1-.4-.047.394.394 0 0 1-.164-.324V4.956a.23.23 0 0 0-.206-.206H3.456a.223.223 0 0 0-.206.206v4.832c0 .096.049.185.13.236a.153.153 0 0 0 .17 0 2.193 2.193 0 0 1 1.005-.23 2.21 2.21 0 0 1 0 4.421 2.352 2.352 0 0 1-.993-.229.276.276 0 0 0-.224.035.218.218 0 0 0-.088.183v4.832c.008.11.096.198.206.206h4.833c.07 0 .136-.036.176-.094a.259.259 0 0 0 .035-.23 2.099 2.099 0 0 1-.23-.981 2.21 2.21 0 0 1 .86-1.752 2.246 2.246 0 0 1 1.963-.4 2.222 2.222 0 0 1 1.605 2.134 2.352 2.352 0 0 1-.23.994.241.241 0 0 0 .036.217c.04.059.106.094.176.095h4.839a.23.23 0 0 0 .206-.206v-4.833a.435.435 0 0 1 .223-.388.335.335 0 0 1 .353 0c.279.14.587.211.9.206a2.058 2.058 0 0 0 1.969-2.599v.018Z"
        id="plugin_react_svg__c"
      />
    </defs>
    <g fillRule="evenodd">
      <mask id="plugin_react_svg__b" fill="#fff">
        <use xlinkHref="#plugin_react_svg__a" />
      </mask>
      <use
        fillRule="nonzero"
        transform="rotate(-90 12.246 11.996)"
        xlinkHref="#plugin_react_svg__a"
      />
      <mask id="plugin_react_svg__d" fill="#fff">
        <use xlinkHref="#plugin_react_svg__c" />
      </mask>
      <use
        fillRule="nonzero"
        transform="rotate(-90 12.246 11.996)"
        xlinkHref="#plugin_react_svg__c"
      />
    </g>
  </svg>
);

SvgPlugin.displayName = 'SvgPlugin';

const PluginIcon = (props: Props) => {
  const theme = useTheme();
  return (
    <ClassNames>
      {({ css: createClass }) => (
        <SvgPlugin
          {...props}
          className={createClass(getIconStyles(props, theme))}
        />
      )}
    </ClassNames>
  );
};

PluginIcon.displayName = 'PluginIcon';
export default PluginIcon;
