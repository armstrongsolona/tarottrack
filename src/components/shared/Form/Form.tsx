import React from 'react';
import styled from 'styled-components';
import { ButtonStyles } from '../Button/Button';

interface FormProps {
  action?: string;
  children?: React.ReactNode;
  name?: string;
  submitButtonText?: string;
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
}

class Form extends React.Component<FormProps, never> {
  render() {
    const { action, children, name, submitButtonText = 'Submit' } = this.props;

    return (
      <form action={action} name={name} onSubmit={this.handleSubmit}>
        {children}
        <FormSubmitButtonStyles type='submit'>
          {submitButtonText}
        </FormSubmitButtonStyles>
      </form>
    );
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { onSubmit } = this.props;

    event.preventDefault();
    onSubmit(event);
  };
}

const FormSubmitButtonStyles = styled(ButtonStyles)``;

export default Form;
