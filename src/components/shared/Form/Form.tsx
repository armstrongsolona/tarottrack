import React from 'react';
import styled from 'styled-components';
import Button, { ButtonTertiaryStyles } from '../Button/Button';
import Flex from '../../../components/shared/Flex/Flex';

interface FormProps {
  action?: string;
  children?: React.ReactNode;
  name?: string;
  submitButtonText?: string;
  hideSubmitButton?: boolean;
  secondaryButtonText?: React.ReactNode;
  secondaryButtonOnClick?(event: React.MouseEvent<HTMLButtonElement>): void;
  onSubmit?(event: React.FormEvent<HTMLFormElement>): void;
}

class Form extends React.Component<FormProps, never> {
  render() {
    const {
      action,
      children,
      name,
      submitButtonText = 'Submit',
      hideSubmitButton,
      secondaryButtonText,
      secondaryButtonOnClick,
    } = this.props;

    const submitButtonMarkup = hideSubmitButton ? null : (
      <Button type='secondary'>{submitButtonText}</Button>
    );

    const secondaryButtonMarkup = secondaryButtonText ? (
      <FormButtonTertiaryStyles onClick={secondaryButtonOnClick}>
        {secondaryButtonText}
      </FormButtonTertiaryStyles>
    ) : null;

    const footerButtonsMarkup = (
      <Flex justifyContent='flex-end' alignContent='space-between'>
        {secondaryButtonMarkup} {submitButtonMarkup}
      </Flex>
    );

    return (
      <form action={action} name={name} onSubmit={this.handleSubmit}>
        {children}
        {footerButtonsMarkup}
      </form>
    );
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { onSubmit } = this.props;

    if (onSubmit) {
      event.preventDefault();
      onSubmit(event);
    }
  };
}

const FormButtonTertiaryStyles = styled(ButtonTertiaryStyles)`
  margin-right: 1rem;
`;

export default Form;
