import React from 'react';
import Dropdown from '../../../../components/Dropdown/Dropdown';
import Chevron from '../../../../components/Icons/Chevron/Chevron';
import { ButtonWrapper, NetguruLogo, Title, Wrapper } from './Options.styles';

const Options = () => {
  const buttonRef: React.RefObject<HTMLElement> = React.createRef();

  return (
    <>
      <Wrapper>
        <ButtonWrapper ref={buttonRef}>
          <NetguruLogo />
          <Title>Netguru</Title>
          <Chevron />
        </ButtonWrapper>
      </Wrapper>
      <Dropdown attachTo={buttonRef} width={258} isCentered={true}>
        Group options
      </Dropdown>
    </>
  );
};

export default Options;
