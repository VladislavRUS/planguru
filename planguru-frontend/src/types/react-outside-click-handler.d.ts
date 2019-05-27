declare module 'react-outside-click-handler' {
  import React from 'react';

  export interface IOutsideClickHandlerProps {
    onOutsideClick: () => void;
    disabled: boolean;
  }

  export default class OutsideClickHandler extends React.Component<
    IOutsideClickHandlerProps
  > {}
}
