import posed from 'react-pose';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  margin-top: 10vh;
  width: 311px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const LogoIconWrapper = styled.div`
  margin-right: 8px;
`;

export const Title = styled.div`
  color: #7540ee;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.28px;
`;

interface IFormWrapperProps {
  slideLeft: boolean;
}

export const FormWrapper = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    x: (props: IFormWrapperProps) => (props.slideLeft ? '-100%' : '100%'),
    opacity: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
});
