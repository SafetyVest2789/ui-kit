import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { customProperties as vars } from '@commercetools-uikit/design-system';

type TDropdownStylesProps = {
  isSelected?: boolean;
  isIndeterminate?: boolean;
  isStyleButton?: boolean;
  isOpen?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
};

const DropdownItem = styled.button<TDropdownStylesProps>`
  width: 100%;
  border: 0;
  font-size: 1rem;
  cursor: pointer;
  padding: ${vars.spacingXs} ${vars.spacingS};
  font-family: ${vars.fontFamilyDefault};
  display: block;
  background-color: ${(props) =>
    props.isSelected ? vars.colorAccent95 : vars.colorSurface};

  &:focus,
  &:hover {
    outline: none;
    background-color: ${vars.colorNeutral90};
  }
`;

const getButtonStyles = (props: TDropdownStylesProps) => [
  css`
    border: 0;
    font-family: ${vars.fontFamilyDefault};
    border-radius: ${vars.borderRadius4};
    cursor: pointer;
    font-size: ${vars.fontSizeForInput};
    color: ${vars.colorSolid};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${props.isStyleButton
      ? `calc(${vars.spacingXs} - 1px) ${vars.spacingS}`
      : vars.spacingXs};

    &:hover {
      background-color: ${vars.colorNeutral90};
    }
  `,
  props.isIndeterminate &&
    css`
      background-color: ${vars.colorAccent95};
    `,
  props.isOpen &&
    css`
      &:not(:hover) {
        background-color: ${vars.colorAccent30};
        color: ${vars.colorSurface};

        svg {
          fill: ${vars.colorSurface};
        }
      }
    `,
  props.isReadOnly &&
    css`
      color: ${vars.colorNeutral60};

      svg {
        fill: ${vars.colorNeutral60};
      }
    `,
  props.isDisabled &&
    css`
      color: ${vars.colorNeutral60};

      svg {
        fill: ${vars.colorNeutral60};
      }
    `,
];

const DropdownContainer = styled.div`
  position: absolute;
  cursor: pointer;
  font-size: ${vars.fontSizeForInput};
  top: ${vars.spacingXs};
  margin-top: ${vars.spacingXs};
  left: 0;
  white-space: nowrap;
  background: ${vars.colorSurface};
  overflow: hidden;
  z-index: 9999;
  border: 1px solid ${vars.colorPrimary};
  border-radius: ${vars.borderRadius6};
`;

export { DropdownContainer, DropdownItem, getButtonStyles };
