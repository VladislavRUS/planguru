import React from 'react';
import SearchIcon from '../../../../components/Icons/Search';
import { SearchIconWrapper, SearchInput, Wrapper } from './Search.styles';

const Search: React.FC = () => (
  <Wrapper>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <SearchInput placeholder={'Search'} />
  </Wrapper>
);

export default Search;
