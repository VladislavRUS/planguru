import styled from 'styled-components';

export const StyledInput = styled.input`
  padding-bottom: 4px;
  width: 100%;
  color: #787993;
  font-size: 16px;
  letter-spacing: 0.76px;
  border-bottom: 1px solid #dfdfe4;
  font-family: 'Karla', sans-serif;
  transition: border 0.2s ease;

  &:focus {
    border-bottom: 1px solid #b9b9be;
  }
`;
