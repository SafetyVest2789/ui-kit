/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';
import { customProperties as vars } from '@commercetools-uikit/design-system';
import type { TSearchSelectInputProps } from './search-select-input';

const SearchSelectInputWrapper = styled.div<
  Pick<TSearchSelectInputProps, 'isDisabled' | 'isReadOnly'>
>`
  ${(props) =>
    !props.isDisabled && !props.isReadOnly
      ? `div[class$='control'] {
        &:hover {
          cursor: text;
        }
        div[class$='indicatorContainer' i] {
          cursor: pointer;
          svg * {
            fill: ${vars.colorSolid};
          }
        }
      }`
      : ''}
`;

export { SearchSelectInputWrapper };