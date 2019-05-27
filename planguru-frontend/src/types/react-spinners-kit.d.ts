declare module 'react-spinners-kit' {
  import React from 'react';

  export interface ICircleSpinnerProps {
    size: number;
    color: string;
  }

  export class CircleSpinner extends React.Component<ICircleSpinnerProps> {}
}
