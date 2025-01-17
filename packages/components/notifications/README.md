<!-- THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. -->
<!-- This file is created by the `yarn generate-readme` script. -->

# Notifications

## Description

Notification components.

## Installation

```
yarn add @commercetools-uikit/notifications
```

```
npm --save install @commercetools-uikit/notifications
```

Additionally install the peer dependencies (if not present)

```
yarn add react react-intl
```

```
npm --save install react react-intl
```

## Usage

```jsx
import { ContentNotification } from '@commercetools-uikit/notifications';

export const Success = () => (
  <ContentNotification type="success">
    This is an success message
  </ContentNotification>
);
export const Info = () => (
  <ContentNotification type="info">This is an info message</ContentNotification>
);
export const Warning = () => (
  <ContentNotification type="warning">
    This is an warning message
  </ContentNotification>
);
export const Error = () => (
  <ContentNotification type="error">
    This is an error message
  </ContentNotification>
);
```

## ContentNotification

### Properties

| Props         | Type                                                                        | Required | Default | Description                                                                                                                    |
| ------------- | --------------------------------------------------------------------------- | :------: | ------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`        | `union`<br/>Possible values:<br/>`'error' , 'info' , 'warning' , 'success'` |    ✅    |         | Determines the color/type of notification.                                                                                     |
| `intlMessage` | `MessageDescriptor`                                                         |          |         | An `intl` message object that will be rendered with `FormattedMessage`.&#xA;<br />&#xA;Required if `children` is not provided. |
| `children`    | `ReactNode`                                                                 |          |         | The content of the notification.&#xA;<br />&#xA;Required if `intlMessage` is not provided.                                     |
