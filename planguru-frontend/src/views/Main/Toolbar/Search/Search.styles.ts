import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  border-right: 1px solid rgb(241, 241, 245);
  flex-grow: 1;
`;

export const SearchIconWrapper = styled.div`
  margin-left: 32px;
  margin-right: 16px;
`;

export const SearchInput = styled.input`
  color: #787993;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.2px;

  &::placeholder {
    color: rgb(208, 208, 212);
  }
`;
