import type { LocationDescriptor } from 'history';

import { ReactNode, MouseEvent, KeyboardEvent } from 'react';
import { css, SerializedStyles, useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import {
  customProperties as vars,
  designTokens,
} from '@commercetools-uikit/design-system';
import Constraints from '@commercetools-uikit/constraints';
import AccessibleButton from '@commercetools-uikit/accessible-button';
import { CloseBoldIcon } from '@commercetools-uikit/icons';
import TagBody from './tag-body';

export type TTagProps = {
  /**
   * Indicates color scheme of the tag.
   */
  type?: 'normal' | 'warning';
  /**
   * Styles object that is spread into the tag body.
   */
  styles?: Record<string, SerializedStyles>;
  /**
   * Link of the tag when not disabled
   */
  to?: string | LocationDescriptor;
  /**
   * Disable the tag element along with the option to remove it.
   */
  isDisabled?: boolean;
  /**
   * Called when remove button is clicked.
   */
  onRemove?: (
    event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>
  ) => void;
  /**
   * Called when tag element is clicked. This is not called when remove button is clicked.
   */
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  /**
   * Horizontal size limit of the input field.
   */
  horizontalConstraint?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 'scale'
    | 'auto';
  /**
   * Content rendered within the tag
   */
  children: ReactNode;
};

const defaultProps: Pick<
  TTagProps,
  'type' | 'isDisabled' | 'horizontalConstraint'
> = {
  type: 'normal',
  isDisabled: false,
  horizontalConstraint: 'scale',
};

const Tag = (props: TTagProps) => {
  const linkProps =
    props.to && !props.isDisabled ? { as: Link, to: props.to } : {};
  const theme = useTheme();
  const overwrittenVars = {
    ...vars,
    ...theme,
  };
  return (
    <Constraints.Horizontal max={props.horizontalConstraint}>
      <div
        css={css`
          a {
            cursor: pointer;
            text-decoration: none;
          }
          cursor: default;
          min-width: 0;
          display: flex;
          background-color: ${props.type === 'warning'
            ? overwrittenVars[designTokens.backgroundColorForTagWarning]
            : overwrittenVars[designTokens.backgroundColorForTag]};
        `}
      >
        <TagBody
          {...linkProps}
          styles={props.styles}
          type={props.type}
          onClick={props.onClick}
          onRemove={props.onRemove}
          isDisabled={props.isDisabled}
        >
          {props.children}
        </TagBody>

        {Boolean(props.onRemove) && (
          <AccessibleButton
            label="Remove"
            isDisabled={props.isDisabled}
            onClick={props.onRemove}
            css={[
              css`
                border-color: ${props.type === 'warning'
                  ? overwrittenVars[designTokens.borderColorForTagWarning]
                  : overwrittenVars[designTokens.borderColorForTag]};
                padding: 0 ${vars.spacingXs};
                border-radius: 0
                  ${overwrittenVars[designTokens.borderRadiusForTag]}
                  ${overwrittenVars[designTokens.borderRadiusForTag]} 0;
                display: flex;
                align-items: center;
                background: inherit;
                border-style: solid;
                border-width: 1px 1px 1px 1px;
                :not(:disabled)&:hover,
                :not(:disabled)&:focus {
                  border-color: ${overwrittenVars[
                    designTokens.borderColorForTagWarning
                  ]};

                  > svg * {
                    fill: ${overwrittenVars[
                      designTokens.borderColorForTagWarning
                    ]};
                  }
                }
                > svg * {
                  fill: ${overwrittenVars[designTokens.fontColorForTag]};
                }
                &:disabled > svg * {
                  fill: ${overwrittenVars[
                    designTokens.fontColorForTagWhenDisabled
                  ]};
                }
              `,
            ]}
          >
            <CloseBoldIcon size="medium" />
          </AccessibleButton>
        )}
      </div>
    </Constraints.Horizontal>
  );
};

Tag.defaultProps = defaultProps;
Tag.displayName = 'Tag';

export default Tag;
