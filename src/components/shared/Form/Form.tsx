import React from 'react';

interface FormProps {
  action?: string;
  children?: React.ReactNode;
  name?: string;
  submitButtonText?: string;
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
}

const Form = (props: FormProps) => {
  const { action, children, name, submitButtonText = 'Submit' } = props;

  return (
    <form action={action} name={name} onSubmit={handleSubmit}>
      {children}
      <button type='submit'>{submitButtonText}</button>
    </form>
  );
};

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  const { onSubmit } = this.props;

  event.preventDefault();
  onSubmit(event);
};

export default Form;
