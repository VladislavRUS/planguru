import styled from 'styled-components';

interface IWrapperProps {
  borderColor: string;
}

export const Wrapper = styled.div<IWrapperProps>`
  padding: 24px;
  display: flex;
  box-shadow: 0 4px 24px rgba(37, 38, 94, 0.1);
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  height: 145px;
  border-left: 8px solid ${props => props.borderColor};

  & + & {
    margin-top: 32px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Info = styled.div``;

export const Title = styled.div`
  margin-bottom: 4px;
  color: rgb(37, 38, 94);
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.39px;
`;

export const Time = styled.div`
  color: rgb(120, 121, 147);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.35px;
  text-transform: uppercase;
`;

export const Participants = styled.div``;

export const Signs = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

interface ICheckmarkWrapper {
  backgroundColor: string;
}

export const CheckmarkWrapper = styled.div<ICheckmarkWrapper>`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 32px;
  border-radius: 16px;
  background-color: ${props => props.backgroundColor};
`;
