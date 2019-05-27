import React from 'react';
import Options from './Options/Options';
import Search from './Search';
import { Wrapper } from './Tooblar.styles';
import UserMenu from './UserMenu/UserMenu';

const Toolbar: React.FC = () => (
  <Wrapper>
    <Options />
    <Search />
    <UserMenu />
  </Wrapper>
);

export default Toolbar;
