import React from 'react';
import { PoseGroup } from 'react-pose';
import LogoIcon from '../../components/Icons/Logo';
import {
  ContentWrapper,
  FormWrapper,
  Header,
  LogoIconWrapper,
  Title,
  Wrapper,
} from './Auth.styles';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';

interface ILoginState {
  hasAccount: boolean;
}

class Auth extends React.Component<{}, ILoginState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      hasAccount: true,
    };
  }

  public render() {
    const { hasAccount } = this.state;

    return (
      <Wrapper>
        <ContentWrapper>
          <Header>
            <LogoIconWrapper>
              <LogoIcon width={24} height={24} />
            </LogoIconWrapper>
            <Title>Planguru</Title>
          </Header>
          <PoseGroup>
            {hasAccount && (
              <FormWrapper key={'login'} slideLeft={true}>
                <LoginForm onCreateAccount={this.onCreateAccount} />
              </FormWrapper>
            )}
          </PoseGroup>
          <PoseGroup>
            {!hasAccount && (
              <FormWrapper key={'register'}>
                <RegisterForm onHasAccount={this.onHasAccount} />
              </FormWrapper>
            )}
          </PoseGroup>
        </ContentWrapper>
      </Wrapper>
    );
  }

  private onCreateAccount = () => {
    this.setState({
      hasAccount: false,
    });
  };

  private onHasAccount = () => {
    this.setState({
      hasAccount: true,
    });
  };
}

export default Auth;
