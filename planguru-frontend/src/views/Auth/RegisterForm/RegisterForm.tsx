import React, { SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Button from '../../../components/Button';
import { IApplicationState } from '../../../store';
import { registerRequest } from '../../../store/register/actions';
import BaseForm from '../BaseForm';

interface IRegisterFormProps {
  onHasAccount: () => void;
}

interface IMapStateProps {
  isLoading: boolean;
  hasAccount: boolean;
}

interface IMapDispatchProps {
  registerRequest: typeof registerRequest;
}

type AllProps = IRegisterFormProps & IMapStateProps & IMapDispatchProps;

interface IRegisterFormState {
  email: string;
  password: string;
  repeatPassword: string;
}

const mapStateToProps = (state: IApplicationState) => ({
  isLoading: state.register.isLoading,
  hasAccount: state.register.hasAccount,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      registerRequest,
    },
    dispatch,
  );

class RegisterForm extends React.Component<AllProps, IRegisterFormState> {
  constructor(props: AllProps) {
    super(props);

    this.state = {
      email: '',
      password: '',
      repeatPassword: '',
    };
  }

  public render() {
    const { onHasAccount, isLoading } = this.props;
    const { email, password, repeatPassword } = this.state;

    return (
      <BaseForm
        title={'Sign up'}
        subtitle={'Create an account to use Planguru without limits. For free.'}
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
          {
            key: 'repeatPassword',
            value: repeatPassword,
            placeholder: 'Repeat password',
            onInputChange: this.handleRepeatPasswordChange,
            type: 'password',
          },
        ]}
        actions={
          <Button
            onClick={this.onRegister}
            text={'Sign up'}
            textColor={'rgb(255, 112, 82)'}
            backgroundColor={'rgba(255, 112, 82, 0.2)'}
            isLoading={isLoading}
          />
        }
        footerText={'I already have an account.'}
        footerButtonOnClick={onHasAccount}
        footerButtonText={'Login'}
        footerButtonTextColor={'rgb(117, 64, 238)'}
        footerButtonBorderColor={'rgba(117, 64, 238, 0.15)'}
      />
    );
  }

  public componentDidUpdate(prevProps: AllProps) {
    if (!prevProps.hasAccount && this.props.hasAccount) {
      this.props.onHasAccount();
    }
  }

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

  private handleRepeatPasswordChange = (
    event: React.FormEvent<HTMLInputElement>,
  ) => {
    this.setState({
      repeatPassword: event.currentTarget.value,
    });
  };

  private onRegister = (event: SyntheticEvent) => {
    if (this.state.password === this.state.repeatPassword) {
      this.props.registerRequest({
        email: this.state.email,
        password: this.state.password,
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterForm);
