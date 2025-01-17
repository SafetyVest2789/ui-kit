import type { LocationDescriptor } from 'history';

import { cloneElement, ReactElement, useEffect } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { customProperties as vars } from '@commercetools-uikit/design-system';
import {
  warnDeprecatedComponent,
  filterInvalidAttributes,
} from '@commercetools-uikit/utils';
import Inline from '@commercetools-uikit/spacings-inline';
import Text from '@commercetools-uikit/text';

export type TLinkButtonProps = {
  /**
   * Should describe what the button is for.
   */
  label: string;

  /**
   * A string or an object representing the link location.
   */
  to: string | LocationDescriptor;

  /**
   * The icon of the button.
   */
  iconLeft?: ReactElement;

  /**
   * Determines if the button is disabled.
   * <br />
   * Note that this influences the `tone` and `onClick` will not be triggered in this state.
   */
  isDisabled?: boolean;

  /**
   * Determines if the button link should be a normal `<a>` element or not.
   */
  isExternal?: boolean;
};

const defaultProps: Pick<TLinkButtonProps, 'isDisabled' | 'isExternal'> = {
  isDisabled: false,
  isExternal: false,
};

const hoverStyles = css`
  &:hover,
  &:focus,
  &:active {
    span {
      color: ${vars.colorPrimary25};
    }

    svg * {
      fill: ${vars.colorPrimary25};
    }
  }
`;

const StyledExternalLink = styled.a<
  Pick<TLinkButtonProps, 'to' | 'isDisabled'>
>`
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  border: none;
  background: none;
  padding: 0;
  min-height: initial;
  text-decoration: none;

  span {
    color: ${(props) =>
      props.isDisabled ? vars.colorNeutral : vars.colorPrimary};
  }

  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};

  ${(props) => !props.isDisabled && hoverStyles}
`;

const LinkBody = (
  props: Pick<TLinkButtonProps, 'iconLeft' | 'label' | 'isDisabled'>
) => (
  <Inline scale="xs" alignItems="center">
    {props.iconLeft
      ? cloneElement(props.iconLeft, {
          size: 'medium',
          color: props.isDisabled ? 'neutral60' : 'primary',
        })
      : null}
    <Text.Body as="span">{props.label}</Text.Body>
  </Inline>
);

LinkBody.displayName = 'LinkBody';

const LinkButton = (props: TLinkButtonProps) => {
  useEffect(() => {
    warnDeprecatedComponent('LinkButton');
  }, []);
  const remainingProps = filterInvalidAttributes(props);

  if (props.isExternal) {
    if (typeof props.to !== 'string') {
      throw new Error('`to` must be a `string` when `isExternal` is provided.');
    }

    return (
      // @ts-ignore: the `to` prop in this case is not required
      // to be provided, instead the `href` is.
      <StyledExternalLink
        href={props.to}
        onClick={
          props.isDisabled ? (event) => event.preventDefault() : undefined
        }
        isDisabled={props.isDisabled}
        data-track-component="LinkButton"
        aria-label={props.label}
        {...remainingProps}
      >
        <LinkBody
          iconLeft={props.iconLeft}
          isDisabled={props.isDisabled}
          label={props.label}
        />
      </StyledExternalLink>
    );
  }

  return (
    <StyledExternalLink
      as={ReactRouterLink}
      to={props.to}
      isDisabled={props.isDisabled}
      onClick={props.isDisabled ? (event) => event.preventDefault() : undefined}
      data-track-component="LinkButton"
      aria-label={props.label}
      {...remainingProps}
    >
      <LinkBody
        iconLeft={props.iconLeft}
        isDisabled={props.isDisabled}
        label={props.label}
      />
    </StyledExternalLink>
  );
};

LinkButton.displayName = 'LinkButton';
LinkButton.defaultProps = defaultProps;

export default LinkButton;
