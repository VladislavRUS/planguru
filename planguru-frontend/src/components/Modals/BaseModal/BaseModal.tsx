import React, { SyntheticEvent } from 'react';
import { Wrapper } from './BaseModal.styles';

const BaseModal: React.FC = props => {
  const onClick = (event: SyntheticEvent) => event.stopPropagation();
  return <Wrapper onClick={onClick}>{props.children}</Wrapper>;
};

export default BaseModal;
