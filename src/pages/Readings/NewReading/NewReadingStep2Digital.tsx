import React from 'react';
import NewReadingStep2Header from './NewReadingStep2Header';

interface NewReadingStep2DigitalProps {
  querent: string;
  spread: string;
}

export default function NewReadingStep2Digital(
  props: NewReadingStep2DigitalProps,
) {
  const { querent, spread } = props;

  return <NewReadingStep2Header querent={querent} spread={spread} />;
}
