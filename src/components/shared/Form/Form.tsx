import React from 'react';

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
        <button type='submit'>{submitButtonText}</button>
      </form>
    );
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { onSubmit } = this.props;

    event.preventDefault();
    onSubmit(event);
  };
}

export default Form;
