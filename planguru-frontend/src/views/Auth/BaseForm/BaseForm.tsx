import React, { SyntheticEvent } from 'react';
import Input from '../../../components/Input/Input';
import UnderlineButton from '../../../components/UnderlineButton/UnderlineButton';
import {
  ActionsWrapper,
  Body,
  Footer,
  FooterText,
  InputWrapper,
  Subtitle,
  Title,
  Wrapper,
} from './BaseForm.styles';

interface IBaseFormInput {
  key: string;
  value: string;
  placeholder: string;
  onInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
  type?: string;
}

interface IBaseFormProps {
  title: string;
  subtitle: string;
  inputs: IBaseFormInput[];
  actions: any;
  footerText: string;
  footerButtonText: string;
  footerButtonOnClick: (event: SyntheticEvent) => void;
  footerButtonTextColor: string;
  footerButtonBorderColor: string;
}

const BaseForm: React.FC<IBaseFormProps> = props => (
  <Wrapper>
    <Title>{props.title}</Title>
    <Subtitle>{props.subtitle}</Subtitle>
    <Body>
      {props.inputs.map(input => (
        <InputWrapper key={input.key}>
          <Input
            onChange={input.onInputChange}
            value={input.value}
            placeholder={input.placeholder}
            type={input.type}
          />
        </InputWrapper>
      ))}
      <ActionsWrapper>{props.actions}</ActionsWrapper>
    </Body>
    <Footer>
      <FooterText>{props.footerText}</FooterText>
      <UnderlineButton
        onClick={props.footerButtonOnClick}
        text={props.footerButtonText}
        textColor={props.footerButtonTextColor}
        borderColor={props.footerButtonBorderColor}
      />
    </Footer>
  </Wrapper>
);

export default BaseForm;
