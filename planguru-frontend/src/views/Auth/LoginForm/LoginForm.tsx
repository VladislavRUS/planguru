import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Button from '../../../components/Button';
import UnderlineButton from '../../../components/UnderlineButton';
import { IApplicationState } from '../../../store';
import { loginRequest } from '../../../store/login/actions';
import BaseForm from '../BaseForm';
import { ActionsWrapper, UnderlineButtonWrapper } from './LoginForm.styles';

interface ILoginFormProps {
  onCreateAccount: () => void;
}

interface IMapStateProps {
  isLoading: boolean;
}

interface IMapDispatchProps {
  loginRequest: typeof loginRequest;
}

type AllProps = ILoginFormProps & IMapStateProps & IMapDispatchProps;

interface ILoginFormState {
  email: string;
  password: string;
}

const mapStateToProps = (state: IApplicationState) => ({
  isLoading: state.login.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      loginRequest,
    },
    dispatch,
  );

class LoginForm extends React.Component<AllProps, ILoginFormState> {
  constructor(props: AllProps) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  public render() {
    const { onCreateAccount, isLoading } = this.props;
    const { email, password } = this.state;

    return (
      <BaseForm
        title={'Hello!'}
        subtitle={'Sign in with your credentials or create a new account'}
        inputs={[
          {
            key: 'email',
            value: email,
            placeholder: 'Email address',
            onInputChange: this.handleEmailChange,
          },
          {
            key: 'password',
            value: password,
            placeholder: 'Password',
            onInputChange: this.handlePasswordChange,
            type: 'password',
          },
        ]}
        actions={
          <ActionsWrapper>
            <Button
              onClick={this.onLogin}
              text={'Login'}
              isLoading={isLoading}
            />
            <UnderlineButtonWrapper>
              <UnderlineButton
                onClick={this.onForgotPassword}
                text={'Forgot password?'}
              />
            </UnderlineButtonWrapper>
          </ActionsWrapper>
        }
        footerText={'Still without account?'}
        footerButtonOnClick={onCreateAccount}
        footerButtonText={'Create one'}
        footerButtonTextColor={'rgb(255, 112, 82)'}
        footerButtonBorderColor={'rgba(255, 112, 82, 0.15)'}
      />
    );
  }

  private onLogin = () => {
    const { email, password } = this.state;

    this.props.loginRequest({
      email,
      password,
    });
  };

  private onForgotPassword = () => {
    console.log('onForgotPassword');
  };

  private handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      email: event.currentTarget.value,
    });
  };

  private handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      password: event.currentTarget.value,
    });
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
