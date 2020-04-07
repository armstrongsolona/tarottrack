import React from 'react';

interface NewReadingStep2HeaderProps {
  querent: string;
  spread: string;
}

export default function NewReadingStep2Header(
  props: NewReadingStep2HeaderProps,
) {
  const { querent, spread } = props;

  return (
    <>
      <span>Querent: {querent}</span>
      <br />
      <span>{spread}</span>
    </>
  );
}
