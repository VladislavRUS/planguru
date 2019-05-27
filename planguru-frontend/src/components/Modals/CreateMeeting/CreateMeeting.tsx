import React from 'react';
import BaseModal from '../BaseModal/BaseModal';
import { Wrapper } from './CreateMeeting.styles';

interface ICreateMeetingProps {
  params: any;
}

type AllProps = ICreateMeetingProps;

class CreateMeeting extends React.Component<AllProps> {
  public render() {
    return (
      <BaseModal>
        <Wrapper>Modal for creating new meeting</Wrapper>
      </BaseModal>
    );
  }
}

export default CreateMeeting;
