import React from 'react';
import avatarImg from '../../../../assets/images/avatar.jpg';
import Dropdown from '../../../../components/Dropdown/Dropdown';
import BellIcon from '../../../../components/Icons/Bell';
import ChevronIcon from '../../../../components/Icons/Chevron';
import {
  Avatar,
  BellIconWrapper,
  Greeting,
  Name,
  Personal,
  Wrapper,
} from './UserMenu.styles';

const UserMenu: React.FC = () => {
  const bellIconRef: React.RefObject<HTMLElement> = React.createRef();
  const personalRef: React.RefObject<HTMLElement> = React.createRef();

  return (
    <>
      <Wrapper>
        <BellIconWrapper ref={bellIconRef}>
          <BellIcon />
        </BellIconWrapper>
        <Personal ref={personalRef}>
          <Greeting>
            Hello, <Name>Vlad</Name>
          </Greeting>
          <Avatar src={avatarImg} />
          <ChevronIcon />
        </Personal>
      </Wrapper>
      <Dropdown attachTo={bellIconRef} width={200} isCentered={true}>
        Notifications
      </Dropdown>
      <Dropdown attachTo={personalRef}>User options</Dropdown>
    </>
  );
};

export default UserMenu;
