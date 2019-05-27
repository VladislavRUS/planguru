import styled from 'styled-components';

interface IWrapperProps {
  backgroundColor: string;
  borderColor: string;
  fontColor: string;
}

export const Wrapper = styled.div<IWrapperProps>`
  height: 26px;
  width: 40px;
  padding: 1px;
  background-color: ${props => props.backgroundColor};
  border-radius: 16px;
  border: 2px solid ${props => props.borderColor};
  color: ${props => props.fontColor};
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.52px;
`;
