# @commercetools-uikit/localized-text-field

## 15.2.1

### Patch Changes

- Updated dependencies [[`83e33a84c`](https://github.com/commercetools/ui-kit/commit/83e33a84c861ef3cab2eca4333f11cd414546c2b)]:
  - @commercetools-uikit/utils@15.2.1
  - @commercetools-uikit/field-label@15.2.1
  - @commercetools-uikit/localized-text-input@15.2.1
  - @commercetools-uikit/constraints@15.2.1
  - @commercetools-uikit/field-errors@15.2.1
  - @commercetools-uikit/spacings@15.2.1
  - @commercetools-uikit/design-system@15.2.1

## 15.2.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/field-label@15.2.0
  - @commercetools-uikit/localized-text-input@15.2.0
  - @commercetools-uikit/design-system@15.2.0
  - @commercetools-uikit/constraints@15.2.0
  - @commercetools-uikit/field-errors@15.2.0
  - @commercetools-uikit/utils@15.2.0
  - @commercetools-uikit/spacings@15.2.0

## 15.1.2

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/design-system@15.1.2
  - @commercetools-uikit/constraints@15.1.2
  - @commercetools-uikit/field-errors@15.1.2
  - @commercetools-uikit/field-label@15.1.2
  - @commercetools-uikit/localized-text-input@15.1.2
  - @commercetools-uikit/utils@15.1.2
  - @commercetools-uikit/spacings@15.1.2

## 15.1.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/design-system@15.1.1
  - @commercetools-uikit/constraints@15.1.1
  - @commercetools-uikit/field-errors@15.1.1
  - @commercetools-uikit/field-label@15.1.1
  - @commercetools-uikit/localized-text-input@15.1.1
  - @commercetools-uikit/utils@15.1.1
  - @commercetools-uikit/spacings@15.1.1

## 15.1.0

### Patch Changes

- Updated dependencies [[`6cdd80024`](https://github.com/commercetools/ui-kit/commit/6cdd80024436755b68544992af1f8361cc7ff52a)]:
  - @commercetools-uikit/utils@15.1.0
  - @commercetools-uikit/constraints@15.1.0
  - @commercetools-uikit/field-label@15.1.0
  - @commercetools-uikit/localized-text-input@15.1.0
  - @commercetools-uikit/field-errors@15.1.0
  - @commercetools-uikit/spacings@15.1.0
  - @commercetools-uikit/design-system@15.1.0

## 15.0.0

### Patch Changes

- [#2159](https://github.com/commercetools/ui-kit/pull/2159) [`648c6a917`](https://github.com/commercetools/ui-kit/commit/648c6a917be3fe528b57eb5f0d6439ca745a2ec4) Thanks [@kark](https://github.com/kark)! - Alignment of versions across packages related to the major release of:
  - '@commercetools-uikit/localized-rich-text-input'
  - '@commercetools-uikit/rich-text-input'
  - '@commercetools-uikit/rich-text-utils'
- Updated dependencies [[`648c6a917`](https://github.com/commercetools/ui-kit/commit/648c6a917be3fe528b57eb5f0d6439ca745a2ec4)]:
  - @commercetools-uikit/design-system@15.0.0
  - @commercetools-uikit/constraints@15.0.0
  - @commercetools-uikit/field-errors@15.0.0
  - @commercetools-uikit/field-label@15.0.0
  - @commercetools-uikit/localized-text-input@15.0.0
  - @commercetools-uikit/utils@15.0.0
  - @commercetools-uikit/spacings@15.0.0

## 14.0.6

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/field-label@14.0.6
  - @commercetools-uikit/spacings@14.0.6
  - @commercetools-uikit/localized-text-input@14.0.6

## 14.0.3

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/localized-text-input@14.0.3

## 14.0.2

### Patch Changes

- [#2147](https://github.com/commercetools/ui-kit/pull/2147) [`419935d2d`](https://github.com/commercetools/ui-kit/commit/419935d2d819d477a936fc9cb2dc2f0e3e840cc3) Thanks [@emmenko](https://github.com/emmenko)! - Refine types for event handlers and other minor inconsistencies.

- Updated dependencies [[`419935d2d`](https://github.com/commercetools/ui-kit/commit/419935d2d819d477a936fc9cb2dc2f0e3e840cc3)]:
  - @commercetools-uikit/localized-text-input@14.0.2
  - @commercetools-uikit/field-label@14.0.2

## 14.0.1

### Patch Changes

- [#2141](https://github.com/commercetools/ui-kit/pull/2141) [`9060c8dc2`](https://github.com/commercetools/ui-kit/commit/9060c8dc2cb248099a7edb03d91af7518d2d3faa) Thanks [@emmenko](https://github.com/emmenko)! - Expose static method `toFieldErrors` for each `*Field` component.

  Use this function to convert the Formik `errors` object type to our custom field errors type. This is primarily useful when using TypeScript.

  ```ts
  type FormValues = {
    myField: string;
  };

  <TextField
    // ...
    name="my-field"
    errors={TextField.toFieldErrors<FormValues>(formik.errors).myField}
  />;
  ```

- Updated dependencies [[`5a7573e6c`](https://github.com/commercetools/ui-kit/commit/5a7573e6cb3aeac51a5d95b41a2d91f39a82fc63)]:
  - @commercetools-uikit/utils@14.0.1
  - @commercetools-uikit/constraints@14.0.1
  - @commercetools-uikit/field-label@14.0.1
  - @commercetools-uikit/localized-text-input@14.0.1
  - @commercetools-uikit/field-errors@14.0.1
  - @commercetools-uikit/spacings@14.0.1

## 14.0.0

### Major Changes

- [#2136](https://github.com/commercetools/ui-kit/pull/2136) [`df772ffea`](https://github.com/commercetools/ui-kit/commit/df772ffea1f3cfe2439d40ca539ea7e7c0eb83df) Thanks [@emmenko](https://github.com/emmenko)! - This release does not introduce any breaking changes but intends to homogenize versions across all packages with the migration to TypeScript being completed. Having similar versions across packages should ease maintenance and updating from now on.

### Patch Changes

- Updated dependencies [[`df772ffea`](https://github.com/commercetools/ui-kit/commit/df772ffea1f3cfe2439d40ca539ea7e7c0eb83df)]:
  - @commercetools-uikit/design-system@14.0.0
  - @commercetools-uikit/constraints@14.0.0
  - @commercetools-uikit/field-errors@14.0.0
  - @commercetools-uikit/field-label@14.0.0
  - @commercetools-uikit/localized-text-input@14.0.0
  - @commercetools-uikit/utils@14.0.0
  - @commercetools-uikit/spacings@14.0.0

## 13.0.4

### Patch Changes

- [#2128](https://github.com/commercetools/ui-kit/pull/2128) [`f1fdf4468`](https://github.com/commercetools/ui-kit/commit/f1fdf44682ab75a30faa853d8130291c0f58080a) Thanks [@kark](https://github.com/kark)! - Upgrade of `react-intl` version to ^5.24.6 and addition of `react-intl` as a missing dependency

* [#2134](https://github.com/commercetools/ui-kit/pull/2134) [`574046010`](https://github.com/commercetools/ui-kit/commit/574046010955267c579cde54afd08b8b5f0eecf6) Thanks [@emmenko](https://github.com/emmenko)! - Clean up unused dependencies

- [#2122](https://github.com/commercetools/ui-kit/pull/2122) [`ad53141d6`](https://github.com/commercetools/ui-kit/commit/ad53141d62b82dc2778a16494c5c4232083bad31) Thanks [@codeshifu](https://github.com/codeshifu)! - Add support for `aria-invalid` and `aria-errormessage` to fields and inputs components

- Updated dependencies [[`f1fdf4468`](https://github.com/commercetools/ui-kit/commit/f1fdf44682ab75a30faa853d8130291c0f58080a), [`574046010`](https://github.com/commercetools/ui-kit/commit/574046010955267c579cde54afd08b8b5f0eecf6), [`ad53141d6`](https://github.com/commercetools/ui-kit/commit/ad53141d62b82dc2778a16494c5c4232083bad31)]:
  - @commercetools-uikit/field-label@13.0.4
  - @commercetools-uikit/field-errors@13.0.4
  - @commercetools-uikit/localized-text-input@13.0.4

## 13.0.2

### Patch Changes

- [#2116](https://github.com/commercetools/ui-kit/pull/2116) [`b6778bd72`](https://github.com/commercetools/ui-kit/commit/b6778bd72d8c061c143bd0ddfd21e5d82c4a131a) Thanks [@ddouglasz](https://github.com/ddouglasz)! - Migrate localized text field to typescript

- Updated dependencies [[`ab08ef7d4`](https://github.com/commercetools/ui-kit/commit/ab08ef7d43ce530aeeb01702f90e1660277825cb), [`694de78b7`](https://github.com/commercetools/ui-kit/commit/694de78b71c4beb1962a7d7c72f1cb6fa98f1d81)]:
  - @commercetools-uikit/localized-text-input@13.0.2
  - @commercetools-uikit/utils@13.0.2
  - @commercetools-uikit/field-label@13.0.2
  - @commercetools-uikit/field-errors@13.0.2
  - @commercetools-uikit/constraints@13.0.2
  - @commercetools-uikit/spacings@13.0.2

## 13.0.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/field-label@13.0.1
  - @commercetools-uikit/localized-text-input@13.0.1
  - @commercetools-uikit/spacings@13.0.1

## 13.0.0

### Patch Changes

- Updated dependencies [[`769f6307f`](https://github.com/commercetools/ui-kit/commit/769f6307f1a4f73a51c30e0ec7314b57ec8e589c), [`c85238dc2`](https://github.com/commercetools/ui-kit/commit/c85238dc222227b9fb71ecd87ef6e7a09cc206a1), [`2dd7de3e1`](https://github.com/commercetools/ui-kit/commit/2dd7de3e182bfd17d3a1c742b2dd3640abc40de8), [`aae43623f`](https://github.com/commercetools/ui-kit/commit/aae43623f54fc9f9f5dd19c40f836024a187f43e)]:
  - @commercetools-uikit/field-errors@13.0.0
  - @commercetools-uikit/localized-text-input@13.0.0
  - @commercetools-uikit/design-system@13.0.0
  - @commercetools-uikit/constraints@13.0.0
  - @commercetools-uikit/field-label@13.0.0
  - @commercetools-uikit/spacings@13.0.0

## 12.2.9

### Patch Changes

- [#2030](https://github.com/commercetools/ui-kit/pull/2030) [`abeb016f`](https://github.com/commercetools/ui-kit/commit/abeb016f1ceb07483b54185626431bc3f8b53f34) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

- Updated dependencies [[`abeb016f`](https://github.com/commercetools/ui-kit/commit/abeb016f1ceb07483b54185626431bc3f8b53f34)]:
  - @commercetools-uikit/design-system@12.2.9
  - @commercetools-uikit/constraints@12.2.9
  - @commercetools-uikit/field-errors@12.2.9
  - @commercetools-uikit/field-label@12.2.9
  - @commercetools-uikit/localized-text-input@12.2.9
  - @commercetools-uikit/utils@12.2.9
  - @commercetools-uikit/spacings@12.2.9

## 12.2.7

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/field-label@12.2.7
  - @commercetools-uikit/localized-text-input@12.2.7

## 12.2.6

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/field-label@12.2.6
  - @commercetools-uikit/localized-text-input@12.2.6

## 12.2.5

### Patch Changes

- [#2018](https://github.com/commercetools/ui-kit/pull/2018) [`878d08f7`](https://github.com/commercetools/ui-kit/commit/878d08f7ef9a4015b3756e887448b3e26ab91080) Thanks [@emmenko](https://github.com/emmenko)! - Upgrarde to Yarn v3

- Updated dependencies [[`878d08f7`](https://github.com/commercetools/ui-kit/commit/878d08f7ef9a4015b3756e887448b3e26ab91080), [`c253bad3`](https://github.com/commercetools/ui-kit/commit/c253bad3fae2f84158aeeebe1d0bec9124cfe10e), [`37661395`](https://github.com/commercetools/ui-kit/commit/37661395813297ad58b3227f41ca40c291c3b282)]:
  - @commercetools-uikit/design-system@12.2.5
  - @commercetools-uikit/constraints@12.2.5
  - @commercetools-uikit/field-errors@12.2.5
  - @commercetools-uikit/field-label@12.2.5
  - @commercetools-uikit/localized-text-input@12.2.5
  - @commercetools-uikit/utils@12.2.5
  - @commercetools-uikit/spacings@12.2.5

## 12.2.4

### Patch Changes

- Updated dependencies [[`dcc63b4b`](https://github.com/commercetools/ui-kit/commit/dcc63b4b487623f7da3d415336d608fba95cd4d5)]:
  - @commercetools-uikit/design-system@12.2.4
  - @commercetools-uikit/constraints@12.2.4
  - @commercetools-uikit/field-errors@12.2.4
  - @commercetools-uikit/field-label@12.2.4
  - @commercetools-uikit/localized-text-input@12.2.4
  - @commercetools-uikit/spacings@12.2.4

## 12.2.3

### Patch Changes

- [#1974](https://github.com/commercetools/ui-kit/pull/1974) [`425b45a3`](https://github.com/commercetools/ui-kit/commit/425b45a30b0b64f28a7c2db635ab6d0da7eabd8f) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

* [#1980](https://github.com/commercetools/ui-kit/pull/1980) [`c1990f33`](https://github.com/commercetools/ui-kit/commit/c1990f33b29e96be33a77dd4b02c63e65f43047f) Thanks [@emmenko](https://github.com/emmenko)! - Use new TS compiler options `jsx: react-jsx` and `jsxImportSource: @emotion/react`. All unused React imports then have been removed or migrated to destructured named imports.

* Updated dependencies [[`a29b0719`](https://github.com/commercetools/ui-kit/commit/a29b071996e5dd7cc095a22c1b5b10c61a178e97), [`410c24dd`](https://github.com/commercetools/ui-kit/commit/410c24ddb6a5de1aee4dae905cc7a2521752ca0b), [`96753647`](https://github.com/commercetools/ui-kit/commit/9675364778895b24a9087f0e1655254df5242a60), [`425b45a3`](https://github.com/commercetools/ui-kit/commit/425b45a30b0b64f28a7c2db635ab6d0da7eabd8f), [`c1990f33`](https://github.com/commercetools/ui-kit/commit/c1990f33b29e96be33a77dd4b02c63e65f43047f)]:
  - @commercetools-uikit/field-errors@12.2.3
  - @commercetools-uikit/localized-text-input@12.2.3
  - @commercetools-uikit/constraints@12.2.3
  - @commercetools-uikit/design-system@12.2.3
  - @commercetools-uikit/field-label@12.2.3
  - @commercetools-uikit/spacings@12.2.3

## 12.2.2

### Patch Changes

- Updated dependencies [[`52cd68bf`](https://github.com/commercetools/ui-kit/commit/52cd68bfaac2359801bb6a716a41b200da9d8b99), [`64e4bc89`](https://github.com/commercetools/ui-kit/commit/64e4bc891914b65d319611b35c4a52f011c11a07), [`64e4bc89`](https://github.com/commercetools/ui-kit/commit/64e4bc891914b65d319611b35c4a52f011c11a07), [`f3745882`](https://github.com/commercetools/ui-kit/commit/f37458821fdba54d4ef746eb03a4eb9327ff1a42)]:
  - @commercetools-uikit/design-system@12.2.2
  - @commercetools-uikit/constraints@12.2.2
  - @commercetools-uikit/field-errors@12.2.2
  - @commercetools-uikit/field-label@12.2.2
  - @commercetools-uikit/localized-text-input@12.2.2
  - @commercetools-uikit/spacings@12.2.2

## 12.2.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/field-label@12.2.1
  - @commercetools-uikit/localized-text-input@12.2.1

## 12.2.0

### Patch Changes

- Updated dependencies [[`c5a5bc9e`](https://github.com/commercetools/ui-kit/commit/c5a5bc9e23b5f5ea551c1666c8e2f1330f6b32d7)]:
  - @commercetools-uikit/utils@12.2.0
  - @commercetools-uikit/constraints@12.2.0
  - @commercetools-uikit/field-label@12.2.0
  - @commercetools-uikit/localized-text-input@12.2.0
  - @commercetools-uikit/field-errors@12.2.0
  - @commercetools-uikit/spacings@12.2.0

## 12.1.0

### Patch Changes

- Updated dependencies [[`1878a2bf`](https://github.com/commercetools/ui-kit/commit/1878a2bf796f105c55195e86f5496198180d7e2d)]:
  - @commercetools-uikit/design-system@12.1.0
  - @commercetools-uikit/constraints@12.1.0
  - @commercetools-uikit/field-errors@12.1.0
  - @commercetools-uikit/field-label@12.1.0
  - @commercetools-uikit/localized-text-input@12.1.0
  - @commercetools-uikit/spacings@12.1.0

## 12.0.12

### Patch Changes

- Updated dependencies [[`aac07cda`](https://github.com/commercetools/ui-kit/commit/aac07cda3cb5704fd77a65da9e985e9635032616)]:
  - @commercetools-uikit/design-system@12.0.12
  - @commercetools-uikit/constraints@12.0.12
  - @commercetools-uikit/field-errors@12.0.12
  - @commercetools-uikit/field-label@12.0.12
  - @commercetools-uikit/localized-text-input@12.0.12
  - @commercetools-uikit/spacings@12.0.12

## 12.0.8

### Patch Changes

- [#1939](https://github.com/commercetools/ui-kit/pull/1939) [`5c6f88fd`](https://github.com/commercetools/ui-kit/commit/5c6f88fd944f13f5a4d7e58c4e5985b925fe975a) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

* [#1935](https://github.com/commercetools/ui-kit/pull/1935) [`509ee816`](https://github.com/commercetools/ui-kit/commit/509ee816c83a3f9ccd65fe46c4d2dfdfe790744d) Thanks [@tdeekens](https://github.com/tdeekens)! - Update dependencies

* Updated dependencies [[`5c6f88fd`](https://github.com/commercetools/ui-kit/commit/5c6f88fd944f13f5a4d7e58c4e5985b925fe975a), [`509ee816`](https://github.com/commercetools/ui-kit/commit/509ee816c83a3f9ccd65fe46c4d2dfdfe790744d)]:
  - @commercetools-uikit/design-system@12.0.8
  - @commercetools-uikit/constraints@12.0.8
  - @commercetools-uikit/field-errors@12.0.8
  - @commercetools-uikit/field-label@12.0.8
  - @commercetools-uikit/localized-text-input@12.0.8
  - @commercetools-uikit/spacings@12.0.8

## 12.0.7

### Patch Changes

- [#1831](https://github.com/commercetools/ui-kit/pull/1831) [`f2f40530`](https://github.com/commercetools/ui-kit/commit/f2f405300317f544b08d27da2eb8b284e6484808) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

- Updated dependencies [[`7ffa8531`](https://github.com/commercetools/ui-kit/commit/7ffa85317e5c48b5df6d97ee624ea5025df19b90), [`207aef6f`](https://github.com/commercetools/ui-kit/commit/207aef6f41866f0b30506c887d02255142c50e41), [`38e2ab22`](https://github.com/commercetools/ui-kit/commit/38e2ab226d50291fa159a01ee2a7c66d988aed1f), [`f2f40530`](https://github.com/commercetools/ui-kit/commit/f2f405300317f544b08d27da2eb8b284e6484808), [`c39e9e83`](https://github.com/commercetools/ui-kit/commit/c39e9e837ec00ddbd9c85ebcfe467fe1ae154961), [`2d2364d0`](https://github.com/commercetools/ui-kit/commit/2d2364d0118cdd6751c7f7f3b18932ea016080af)]:
  - @commercetools-uikit/field-errors@12.0.7
  - @commercetools-uikit/field-label@12.0.7
  - @commercetools-uikit/localized-text-input@12.0.7
  - @commercetools-uikit/design-system@12.0.7
  - @commercetools-uikit/constraints@12.0.7
  - @commercetools-uikit/utils@12.0.7
  - @commercetools-uikit/spacings@12.0.7

## 12.0.6

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/localized-text-input@12.0.6

## 12.0.5

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/localized-text-input@12.0.5
  - @commercetools-uikit/field-label@12.0.5

## 12.0.4

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/localized-text-input@12.0.4
  - @commercetools-uikit/field-label@12.0.4

## 12.0.3

### Patch Changes

- Updated dependencies [[`bf774967`](https://github.com/commercetools/ui-kit/commit/bf7749675fff92cfdf5bde489ffe5b96361091c1)]:
  - @commercetools-uikit/field-errors@12.0.3
  - @commercetools-uikit/localized-text-input@12.0.3
  - @commercetools-uikit/field-label@12.0.3

## 12.0.2

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/localized-text-input@12.0.2

## 12.0.0

### Major Changes

- [#1852](https://github.com/commercetools/ui-kit/pull/1852) [`236994dd`](https://github.com/commercetools/ui-kit/commit/236994ddbd033b0fa296d05ac40ce907524ff35d) Thanks [@adnasa](https://github.com/adnasa)! - Bump `@commercetools-uikit/*` and `@commercetools-frontend/ui-kit` to v12.

  Read more about it in our [Release Notes](https://docs.commercetools.com/custom-applications/releases).

* [#1829](https://github.com/commercetools/ui-kit/pull/1829) [`d0fd05c9`](https://github.com/commercetools/ui-kit/commit/d0fd05c986cd88333d22798714a816ca67048dac) Thanks [@adnasa](https://github.com/adnasa)! - Remove `constraint` prop (`xs`, `s`, `m`, `l`, `xl`) in favor of `max`.

- [#1855](https://github.com/commercetools/ui-kit/pull/1855) [`af70fa9c`](https://github.com/commercetools/ui-kit/commit/af70fa9cd60c790f1db73c45c02852aeb5cba989) Thanks [@emmenko](https://github.com/emmenko)! - \* The peer dependencies `react` and `react-dom` now only require version `>=17`.
  - The peer dependency `react-intl` now only requires version `>=5`.

### Patch Changes

- Updated dependencies [[`236994dd`](https://github.com/commercetools/ui-kit/commit/236994ddbd033b0fa296d05ac40ce907524ff35d), [`d0fd05c9`](https://github.com/commercetools/ui-kit/commit/d0fd05c986cd88333d22798714a816ca67048dac), [`af70fa9c`](https://github.com/commercetools/ui-kit/commit/af70fa9cd60c790f1db73c45c02852aeb5cba989), [`d0fd05c9`](https://github.com/commercetools/ui-kit/commit/d0fd05c986cd88333d22798714a816ca67048dac)]:
  - @commercetools-uikit/design-system@12.0.0
  - @commercetools-uikit/constraints@12.0.0
  - @commercetools-uikit/field-errors@12.0.0
  - @commercetools-uikit/field-label@12.0.0
  - @commercetools-uikit/localized-text-input@12.0.0
  - @commercetools-uikit/utils@12.0.0
  - @commercetools-uikit/spacings@12.0.0

## 11.3.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/localized-text-input@11.3.0

## 11.2.1

### Patch Changes

- [#1836](https://github.com/commercetools/ui-kit/pull/1836) [`f4b53b59`](https://github.com/commercetools/ui-kit/commit/f4b53b59971711b0b585a39246ad2c52c85288b9) Thanks [@adnasa](https://github.com/adnasa)! - chore: update dependencies

- Updated dependencies [[`f4b53b59`](https://github.com/commercetools/ui-kit/commit/f4b53b59971711b0b585a39246ad2c52c85288b9)]:
  - @commercetools-uikit/design-system@11.2.1
  - @commercetools-uikit/constraints@11.2.1
  - @commercetools-uikit/field-errors@11.2.1
  - @commercetools-uikit/field-label@11.2.1
  - @commercetools-uikit/localized-text-input@11.2.1
  - @commercetools-uikit/utils@11.2.1
  - @commercetools-uikit/spacings@11.2.1

## 11.2.0

### Patch Changes

- Updated dependencies [[`93232c64`](https://github.com/commercetools/ui-kit/commit/93232c64be9f2c794557f42fc9cf14bc61f2d557)]:
  - @commercetools-uikit/utils@11.2.0
  - @commercetools-uikit/constraints@11.2.0
  - @commercetools-uikit/field-label@11.2.0
  - @commercetools-uikit/localized-text-input@11.2.0
  - @commercetools-uikit/field-errors@11.2.0
  - @commercetools-uikit/spacings@11.2.0

## 11.0.2

### Patch Changes

- [`db2e8a20`](https://github.com/commercetools/ui-kit/commit/db2e8a2038a6bf813adf4c16fd77103d356893b6) [#1798](https://github.com/commercetools/ui-kit/pull/1798) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

- Updated dependencies [[`b49a5bf0`](https://github.com/commercetools/ui-kit/commit/b49a5bf04fe25d2dda249a3bc9a5ced365a8e67f), [`db2e8a20`](https://github.com/commercetools/ui-kit/commit/db2e8a2038a6bf813adf4c16fd77103d356893b6)]:
  - @commercetools-uikit/constraints@11.0.2
  - @commercetools-uikit/field-errors@11.0.2
  - @commercetools-uikit/field-label@11.0.2
  - @commercetools-uikit/design-system@11.0.2
  - @commercetools-uikit/localized-text-input@11.0.2
  - @commercetools-uikit/spacings@11.0.2

## 11.0.1

### Patch Changes

- Updated dependencies [[`89302420`](https://github.com/commercetools/ui-kit/commit/89302420fbac2d93785a6908985f42d80e1f377e)]:
  - @commercetools-uikit/design-system@11.0.1
  - @commercetools-uikit/constraints@11.0.1
  - @commercetools-uikit/field-errors@11.0.1
  - @commercetools-uikit/field-label@11.0.1
  - @commercetools-uikit/localized-text-input@11.0.1
  - @commercetools-uikit/spacings@11.0.1

## 10.47.4

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/field-label@10.47.4
  - @commercetools-uikit/localized-text-input@10.47.4

## 10.47.3

### Patch Changes

- Updated dependencies [[`88653838`](https://github.com/commercetools/ui-kit/commit/8865383861492f22a2bfd2def4a5133e3ccf0af1)]:
  - @commercetools-uikit/constraints@10.47.3
  - @commercetools-uikit/field-label@10.47.3
  - @commercetools-uikit/utils@10.47.3
  - @commercetools-uikit/localized-text-input@10.47.3
  - @commercetools-uikit/field-errors@10.47.3
  - @commercetools-uikit/spacings@10.47.3

## 10.47.2

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/field-errors@10.47.2
  - @commercetools-uikit/localized-text-input@10.47.2

## 10.47.0

### Patch Changes

- Updated dependencies [[`7fc183bc`](https://github.com/commercetools/ui-kit/commit/7fc183bcccdc5e81c2cc2eb7029cf32b34087ef3), [`48abdf42`](https://github.com/commercetools/ui-kit/commit/48abdf42c8522a700403f7b3436e0fdce22022b0)]:
  - @commercetools-uikit/constraints@10.47.0
  - @commercetools-uikit/field-label@10.47.0
  - @commercetools-uikit/utils@10.47.0
  - @commercetools-uikit/localized-text-input@10.47.0
  - @commercetools-uikit/field-errors@10.47.0
  - @commercetools-uikit/spacings@10.47.0

## 10.46.3

### Patch Changes

- Updated dependencies [[`8a6238a3`](https://github.com/commercetools/ui-kit/commit/8a6238a384fb4e1c3c73826d28e3812a1debfe67)]:
  - @commercetools-uikit/design-system@10.46.3
  - @commercetools-uikit/constraints@10.46.3
  - @commercetools-uikit/field-errors@10.46.3
  - @commercetools-uikit/field-label@10.46.3
  - @commercetools-uikit/localized-text-input@10.46.3
  - @commercetools-uikit/spacings@10.46.3

## 10.46.2

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/field-label@10.46.2
  - @commercetools-uikit/localized-text-input@10.46.2
  - @commercetools-uikit/field-errors@10.46.2

## 10.46.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/field-label@10.46.1
  - @commercetools-uikit/localized-text-input@10.46.1
  - @commercetools-uikit/field-errors@10.46.1

## 10.45.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/field-label@10.45.0
  - @commercetools-uikit/localized-text-input@10.45.0
  - @commercetools-uikit/field-errors@10.45.0

## 10.44.4

### Patch Changes

- [`d3c9002f`](https://github.com/commercetools/ui-kit/commit/d3c9002fcabeed3c4d2b73835e352490d3532208) [#1637](https://github.com/commercetools/ui-kit/pull/1637) Thanks [@renovate](https://github.com/apps/renovate)! - Support `react` and `react-dom` peer dependencies for version `>= 17`

- Updated dependencies [[`d3c9002f`](https://github.com/commercetools/ui-kit/commit/d3c9002fcabeed3c4d2b73835e352490d3532208)]:
  - @commercetools-uikit/constraints@10.44.4
  - @commercetools-uikit/field-errors@10.44.4
  - @commercetools-uikit/field-label@10.44.4
  - @commercetools-uikit/localized-text-input@10.44.4
  - @commercetools-uikit/spacings@10.44.4

## 10.44.2

### Patch Changes

- Updated dependencies [[`c7b3d51`](https://github.com/commercetools/ui-kit/commit/c7b3d51876663e6ac6036d5274b6b577c7e8a208)]:
  - @commercetools-uikit/spacings@10.44.2
  - @commercetools-uikit/field-label@10.44.2

## 10.44.1

### Patch Changes

- Updated dependencies [[`5f8a7da`](https://github.com/commercetools/ui-kit/commit/5f8a7da2518b401c4f8fe06046dc33b4e8f4414d)]:
  - @commercetools-uikit/constraints@10.44.1
  - @commercetools-uikit/spacings@10.44.1
  - @commercetools-uikit/field-label@10.44.1
  - @commercetools-uikit/localized-text-input@10.44.1

## 10.44.0

### Patch Changes

- Updated dependencies [[`22164a3`](https://github.com/commercetools/ui-kit/commit/22164a34ec0607b778df534378f5cf3f8403f80f), [`22164a3`](https://github.com/commercetools/ui-kit/commit/22164a34ec0607b778df534378f5cf3f8403f80f)]:
  - @commercetools-uikit/utils@10.44.0
  - @commercetools-uikit/constraints@10.44.0
  - @commercetools-uikit/field-label@10.44.0
  - @commercetools-uikit/localized-text-input@10.44.0
  - @commercetools-uikit/spacings@10.44.0
  - @commercetools-uikit/field-errors@10.44.0

## 10.43.3

### Patch Changes

- Updated dependencies [[`13e18a0`](https://github.com/commercetools/ui-kit/commit/13e18a01cc66146c616d5e076e9a16f2642259cf)]:
  - @commercetools-uikit/design-system@10.43.3
  - @commercetools-uikit/constraints@10.43.3
  - @commercetools-uikit/localized-text-input@10.43.3
  - @commercetools-uikit/field-label@10.43.3
  - @commercetools-uikit/spacings@10.43.3
  - @commercetools-uikit/field-errors@10.43.3

## 10.43.2

### Patch Changes

- Updated dependencies [[`276b88d`](https://github.com/commercetools/ui-kit/commit/276b88d4d2e25dc6d45f3c0a182e2b348652275c)]:
  - @commercetools-uikit/design-system@10.43.2
  - @commercetools-uikit/constraints@10.43.2
  - @commercetools-uikit/localized-text-input@10.43.2
  - @commercetools-uikit/field-label@10.43.2
  - @commercetools-uikit/spacings@10.43.2
  - @commercetools-uikit/field-errors@10.43.2

## 10.42.3

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/field-label@10.42.3
  - @commercetools-uikit/localized-text-input@10.42.3

## 10.42.2

### Patch Changes

- [`c7d495b`](https://github.com/commercetools/ui-kit/commit/c7d495b9160392ffd7aa7af24d15518da7948c97) [#1693](https://github.com/commercetools/ui-kit/pull/1693) Thanks [@renovate](https://github.com/apps/renovate)! - Upgrade preconstruct CLI to v2 for bundling.

* [`85fe702`](https://github.com/commercetools/ui-kit/commit/85fe702d28c23de58a376cbcf38d39b838357fbc) [#1697](https://github.com/commercetools/ui-kit/pull/1697) Thanks [@emmenko](https://github.com/emmenko)! - Remove dependency `@emotion/styled-base` as it's not necessary anymore in emotion v11.

* Updated dependencies [[`c7d495b`](https://github.com/commercetools/ui-kit/commit/c7d495b9160392ffd7aa7af24d15518da7948c97), [`85fe702`](https://github.com/commercetools/ui-kit/commit/85fe702d28c23de58a376cbcf38d39b838357fbc)]:
  - @commercetools-uikit/design-system@10.42.2
  - @commercetools-uikit/constraints@10.42.2
  - @commercetools-uikit/field-errors@10.42.2
  - @commercetools-uikit/field-label@10.42.2
  - @commercetools-uikit/localized-text-input@10.42.2
  - @commercetools-uikit/utils@10.42.2
  - @commercetools-uikit/spacings@10.42.2

## 10.42.1

### Patch Changes

- Updated dependencies [[`3c522ed`](https://github.com/commercetools/ui-kit/commit/3c522ed7576af3a6bc6dca30777df76202ca8834)]:
  - @commercetools-uikit/design-system@10.42.1
  - @commercetools-uikit/constraints@10.42.1
  - @commercetools-uikit/localized-text-input@10.42.1
  - @commercetools-uikit/field-label@10.42.1
  - @commercetools-uikit/spacings@10.42.1
  - @commercetools-uikit/field-errors@10.42.1

## 10.42.0

### Minor Changes

- [`04ea8ab`](https://github.com/commercetools/ui-kit/commit/04ea8abdfbada5fedd9a932743323762fb790fd0) [#1671](https://github.com/commercetools/ui-kit/pull/1671) Thanks [@emmenko](https://github.com/emmenko)! - Compile and bundle packages using [preconstruct](https://preconstruct.tools)

### Patch Changes

- Updated dependencies [[`04ea8ab`](https://github.com/commercetools/ui-kit/commit/04ea8abdfbada5fedd9a932743323762fb790fd0)]:
  - @commercetools-uikit/design-system@10.42.0
  - @commercetools-uikit/constraints@10.42.0
  - @commercetools-uikit/field-errors@10.42.0
  - @commercetools-uikit/field-label@10.42.0
  - @commercetools-uikit/localized-text-input@10.42.0
  - @commercetools-uikit/utils@10.42.0
  - @commercetools-uikit/spacings@10.42.0

## 10.41.0

### Minor Changes

- [`26c6562`](https://github.com/commercetools/ui-kit/commit/26c65622f7f1911f51fc0056ade2d0c8ec8af0a1) [#1670](https://github.com/commercetools/ui-kit/pull/1670) Thanks [@emmenko](https://github.com/emmenko)! - Migrate to emotion v11. https://emotion.sh/docs/emotion-11

### Patch Changes

- Updated dependencies [[`26c6562`](https://github.com/commercetools/ui-kit/commit/26c65622f7f1911f51fc0056ade2d0c8ec8af0a1)]:
  - @commercetools-uikit/constraints@10.41.0
  - @commercetools-uikit/field-errors@10.41.0
  - @commercetools-uikit/field-label@10.41.0
  - @commercetools-uikit/localized-text-input@10.41.0
  - @commercetools-uikit/utils@10.41.0
  - @commercetools-uikit/spacings@10.41.0

## 10.40.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/field-label@10.40.1
  - @commercetools-uikit/localized-text-input@10.40.1

## 10.40.0

### Minor Changes

- [`a2c1615`](https://github.com/commercetools/ui-kit/commit/a2c1615512b416c464310d3e67a9ee220dde47d8) [#1632](https://github.com/commercetools/ui-kit/pull/1632) Thanks [@jonnybel](https://github.com/jonnybel)! - Add support for new constraint scale values for `horizontalConstraint` prop

### Patch Changes

- Updated dependencies [[`37a68a0`](https://github.com/commercetools/ui-kit/commit/37a68a012bb2e912ee25798312d69ab9b3464bf8), [`a2c1615`](https://github.com/commercetools/ui-kit/commit/a2c1615512b416c464310d3e67a9ee220dde47d8), [`a2c1615`](https://github.com/commercetools/ui-kit/commit/a2c1615512b416c464310d3e67a9ee220dde47d8), [`de7dcdf`](https://github.com/commercetools/ui-kit/commit/de7dcdf295218c50711b238ef12038850bc2463b), [`a2c1615`](https://github.com/commercetools/ui-kit/commit/a2c1615512b416c464310d3e67a9ee220dde47d8)]:
  - @commercetools-uikit/localized-text-input@10.40.0
  - @commercetools-uikit/constraints@10.40.0
  - @commercetools-uikit/field-label@10.40.0
  - @commercetools-uikit/utils@10.40.0
  - @commercetools-uikit/design-system@10.40.0
  - @commercetools-uikit/field-errors@10.40.0
  - @commercetools-uikit/spacings@10.40.0

## 10.39.8

### Patch Changes

- [`3bebfed`](https://github.com/commercetools/ui-kit/commit/3bebfed8f7468f247be2cef30e274088138166e5) [#1662](https://github.com/commercetools/ui-kit/pull/1662) Thanks [@emmenko](https://github.com/emmenko)! - Explicitly get Emotion theme from context instead of relying on the implicit behavior

- Updated dependencies [[`3bebfed`](https://github.com/commercetools/ui-kit/commit/3bebfed8f7468f247be2cef30e274088138166e5)]:
  - @commercetools-uikit/design-system@10.39.8
  - @commercetools-uikit/constraints@10.39.8
  - @commercetools-uikit/field-errors@10.39.8
  - @commercetools-uikit/field-label@10.39.8
  - @commercetools-uikit/localized-text-input@10.39.8
  - @commercetools-uikit/utils@10.39.8
  - @commercetools-uikit/spacings@10.39.8

## 10.39.7

### Patch Changes

- [`a783a3e`](https://github.com/commercetools/ui-kit/commit/a783a3e4c17d89e0cabc77610768b63028e47ac6) [#1630](https://github.com/commercetools/ui-kit/pull/1630) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update remark monorepo to v9 (major)

- Updated dependencies [[`050af75`](https://github.com/commercetools/ui-kit/commit/050af75aabefd0f11b498b48f5926383e7cfcf8b), [`a783a3e`](https://github.com/commercetools/ui-kit/commit/a783a3e4c17d89e0cabc77610768b63028e47ac6)]:
  - @commercetools-uikit/design-system@10.39.7
  - @commercetools-uikit/constraints@10.39.7
  - @commercetools-uikit/field-errors@10.39.7
  - @commercetools-uikit/field-label@10.39.7
  - @commercetools-uikit/localized-text-input@10.39.7
  - @commercetools-uikit/spacings@10.39.7

## 10.39.6

### Patch Changes

- [`bcb2d29`](https://github.com/commercetools/ui-kit/commit/bcb2d29956c959b09c32a1cedaee5ae2fadf034e) [#1657](https://github.com/commercetools/ui-kit/pull/1657) Thanks [@emmenko](https://github.com/emmenko)! - Fix Rollup: keep `process.env.NODE_ENV` in production bundles.

- Updated dependencies [[`3564da3`](https://github.com/commercetools/ui-kit/commit/3564da32dcf07e72ecfff92bdba79f63b26855b8), [`bcb2d29`](https://github.com/commercetools/ui-kit/commit/bcb2d29956c959b09c32a1cedaee5ae2fadf034e)]:
  - @commercetools-uikit/utils@10.39.6
  - @commercetools-uikit/design-system@10.39.6
  - @commercetools-uikit/constraints@10.39.6
  - @commercetools-uikit/field-errors@10.39.6
  - @commercetools-uikit/field-label@10.39.6
  - @commercetools-uikit/localized-text-input@10.39.6
  - @commercetools-uikit/spacings@10.39.6

## 10.39.4

### Patch Changes

- [`a635fcc`](https://github.com/commercetools/ui-kit/commit/a635fcc8105b81545baaa684751432769cc0d94a) [#1652](https://github.com/commercetools/ui-kit/pull/1652) Thanks [@emmenko](https://github.com/emmenko)! - Fix spacings package name (regression).

- Updated dependencies [[`a635fcc`](https://github.com/commercetools/ui-kit/commit/a635fcc8105b81545baaa684751432769cc0d94a)]:
  - @commercetools-uikit/design-system@10.39.4
  - @commercetools-uikit/constraints@10.39.4
  - @commercetools-uikit/field-errors@10.39.4
  - @commercetools-uikit/field-label@10.39.4
  - @commercetools-uikit/localized-text-input@10.39.4
  - @commercetools-uikit/utils@10.39.4
  - @commercetools-uikit/spacings@10.39.4

## 10.39.3

### Patch Changes

- [`1d12f65`](https://github.com/commercetools/ui-kit/commit/1d12f65d06e237b500b27749e9ee93b4fababacb) [#1650](https://github.com/commercetools/ui-kit/pull/1650) Thanks [@emmenko](https://github.com/emmenko)! - Rebundle all packages due to a fix in Rollup.

- Updated dependencies [[`1d12f65`](https://github.com/commercetools/ui-kit/commit/1d12f65d06e237b500b27749e9ee93b4fababacb)]:
  - @commercetools-uikit/design-system@10.39.3
  - @commercetools-uikit/constraints@10.39.3
  - @commercetools-uikit/field-errors@10.39.3
  - @commercetools-uikit/field-label@10.39.3
  - @commercetools-uikit/localized-text-input@10.39.3
  - @commercetools-uikit/utils@10.39.3
  - @commercetools-uikit/spacings@10.39.3

## 10.39.2

### Patch Changes

- [`efde835`](https://github.com/commercetools/ui-kit/commit/efde83584d00f1e3147d179f3ee8233a325b515b) [#1646](https://github.com/commercetools/ui-kit/pull/1646) Thanks [@emmenko](https://github.com/emmenko)! - Improve Rollup configuration, use babel runtime helpers

* [`d65d494`](https://github.com/commercetools/ui-kit/commit/d65d4946feeac082ad8f0a5d44010e3afacb4c79) [#1649](https://github.com/commercetools/ui-kit/pull/1649) Thanks [@emmenko](https://github.com/emmenko)! - Explicitly declare `@emotion/styled-base` dependency so that Yarn workspaces can properly hoist it and node can resolve the module.

* Updated dependencies [[`efde835`](https://github.com/commercetools/ui-kit/commit/efde83584d00f1e3147d179f3ee8233a325b515b), [`d65d494`](https://github.com/commercetools/ui-kit/commit/d65d4946feeac082ad8f0a5d44010e3afacb4c79)]:
  - @commercetools-uikit/design-system@10.39.2
  - @commercetools-uikit/constraints@10.39.2
  - @commercetools-uikit/field-errors@10.39.2
  - @commercetools-uikit/field-label@10.39.2
  - @commercetools-uikit/localized-text-input@10.39.2
  - @commercetools-uikit/utils@10.39.2
  - @commercetools-uikit/spacings@10.39.2

## 10.39.1

### Patch Changes

- [`7897ced`](https://github.com/commercetools/ui-kit/commit/7897cede31440e29ce8afdb2b17fa23462f6f211) [#1642](https://github.com/commercetools/ui-kit/pull/1642) Thanks [@emmenko](https://github.com/emmenko)! - Ensure each package.json of each package has all the necessary fields.

- Updated dependencies [[`7897ced`](https://github.com/commercetools/ui-kit/commit/7897cede31440e29ce8afdb2b17fa23462f6f211)]:
  - @commercetools-uikit/design-system@10.39.1
  - @commercetools-uikit/constraints@10.39.1
  - @commercetools-uikit/field-errors@10.39.1
  - @commercetools-uikit/field-label@10.39.1
  - @commercetools-uikit/localized-text-input@10.39.1
  - @commercetools-uikit/utils@10.39.1
  - @commercetools-uikit/spacings@10.39.1

## 10.38.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/field-label@10.38.0
  - @commercetools-uikit/localized-text-input@10.38.0

## 10.36.1

### Patch Changes

- Updated dependencies [[`c89a528`](https://github.com/commercetools/ui-kit/commit/c89a5285b77a72bc893c53063f697ad81ba9f7a1)]:
  - @commercetools-uikit/localized-text-input@10.36.1

## 10.36.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/field-label@10.36.0
  - @commercetools-uikit/localized-text-input@10.36.0
  - @commercetools-uikit/field-errors@10.36.0

## 10.35.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/field-label@10.35.1
  - @commercetools-uikit/localized-text-input@10.35.1
  - @commercetools-uikit/field-errors@10.35.1

## 10.34.1

### Patch Changes

- [`bdcc9a9`](https://github.com/commercetools/ui-kit/commit/bdcc9a979ab2dd03e43ba8d52d83ffbac38217e4) [#1570](https://github.com/commercetools/ui-kit/pull/1570) Thanks [@jonnybel](https://github.com/jonnybel)! - Improved keyboard navigation support by adding/enhancing visual indicators for hover and focus states, including for readOnly mode.

- Updated dependencies [[`bdcc9a9`](https://github.com/commercetools/ui-kit/commit/bdcc9a979ab2dd03e43ba8d52d83ffbac38217e4)]:
  - @commercetools-uikit/localized-text-input@10.34.1

## 10.33.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/field-label@10.33.0
  - @commercetools-uikit/localized-text-input@10.33.0

## 10.32.1

### Patch Changes

- [`63d0219`](https://github.com/commercetools/ui-kit/commit/63d0219ced9dcf32e8a98930c88558a12435bfdc) [#1553](https://github.com/commercetools/ui-kit/pull/1553) Thanks [@adnasa](https://github.com/adnasa)! - restore horizontalConstraint, allowed values

- Updated dependencies [[`63d0219`](https://github.com/commercetools/ui-kit/commit/63d0219ced9dcf32e8a98930c88558a12435bfdc)]:
  - @commercetools-uikit/localized-text-input@10.32.1

## 10.32.0

### Minor Changes

- [`8aee3b0`](https://github.com/commercetools/ui-kit/commit/8aee3b005eb428522cc8341498bc9191a93be99b) [#1540](https://github.com/commercetools/ui-kit/pull/1540) Thanks [@adnasa](https://github.com/adnasa)! - migrate docs to use `generate-readme`

### Patch Changes

- [`c8d7295`](https://github.com/commercetools/ui-kit/commit/c8d72957b70640d8011c6ae6d679b9a9ed7e4795) [#1550](https://github.com/commercetools/ui-kit/pull/1550) Thanks [@adnasa](https://github.com/adnasa)! - fix typo on `authorized`

- Updated dependencies [[`8aee3b0`](https://github.com/commercetools/ui-kit/commit/8aee3b005eb428522cc8341498bc9191a93be99b)]:
  - @commercetools-uikit/field-errors@10.32.0
  - @commercetools-uikit/localized-text-input@10.32.0

## 10.30.1

### Patch Changes

- [`db6b77c`](https://github.com/commercetools/ui-kit/commit/db6b77c3baf110136440dfc7c6d42cace74eb85e) [#1492](https://github.com/commercetools/ui-kit/pull/1492) Thanks [@emmenko](https://github.com/emmenko)! - Use ranged versions for emotion dependencies

- Updated dependencies [[`2ab294a`](https://github.com/commercetools/ui-kit/commit/2ab294a36e98dc3483507127a0b5d35862cf5429), [`db6b77c`](https://github.com/commercetools/ui-kit/commit/db6b77c3baf110136440dfc7c6d42cace74eb85e)]:
  - @commercetools-uikit/field-label@10.30.1
  - @commercetools-uikit/constraints@10.30.1
  - @commercetools-uikit/field-errors@10.30.1
  - @commercetools-uikit/localized-text-input@10.30.1
  - @commercetools-uikit/spacings@10.18.7

## 10.27.1

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/field-label@10.27.1
  - @commercetools-uikit/spacings@10.18.6
  - @commercetools-uikit/localized-text-input@10.27.1

## 10.27.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/localized-text-input@10.27.0
  - @commercetools-uikit/field-label@10.27.0
  - @commercetools-uikit/field-errors@10.27.0

## 10.24.0

### Patch Changes

- [`c16eeca`](https://github.com/commercetools/ui-kit/commit/c16eeca83593634f0d989582526534bd0bbf120d) [#1404](https://github.com/commercetools/ui-kit/pull/1404) Thanks [@mohib0306](https://github.com/mohib0306)! - Move fields' source code from `src/components/fields` to `packages/components/fields`

- Updated dependencies [[`bf63fd7`](https://github.com/commercetools/ui-kit/commit/bf63fd7b13b9d1a2386b85f123fcda93823d4bcf)]:
  - @commercetools-uikit/localized-text-input@10.24.0
  - @commercetools-uikit/field-label@10.24.0
  - @commercetools-uikit/field-errors@10.24.0

## 10.22.1

### Patch Changes

- Updated dependencies [[`7a602f6`](https://github.com/commercetools/ui-kit/commit/7a602f6005d7dc3e83bdd0b4bbab64d18e1f7bd8)]:
  - @commercetools-uikit/field-errors@10.22.1
  - @commercetools-uikit/localized-text-input@10.22.1
  - @commercetools-uikit/field-label@10.22.1

## 10.22.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/field-label@10.22.0
  - @commercetools-uikit/localized-text-input@10.22.0

## 10.21.0

### Patch Changes

- Updated dependencies [[`f3fb2f0`](https://github.com/commercetools/ui-kit/commit/f3fb2f02f303b8627eece8972c5421e0d17ebb64)]:
  - @commercetools-uikit/utils@10.21.0
  - @commercetools-uikit/localized-text-input@10.21.0
  - @commercetools-uikit/constraints@10.21.0
  - @commercetools-uikit/field-label@10.21.0
  - @commercetools-uikit/field-errors@10.21.0
  - @commercetools-uikit/spacings@10.18.5

## 10.20.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/field-label@10.20.0
  - @commercetools-uikit/localized-text-input@10.20.0

## 10.19.0

### Patch Changes

- Updated dependencies []:
  - @commercetools-uikit/field-label@10.19.0
  - @commercetools-uikit/localized-text-input@10.19.0
