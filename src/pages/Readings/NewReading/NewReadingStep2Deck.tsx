import React from 'react';
import NewReadingStep2Header from './NewReadingStep2Header';

interface NewReadingStep2DeckProps {
  querent: string;
  spread: string;
}

export default function NewReadingStep2Deck(props: NewReadingStep2DeckProps) {
  const { querent, spread } = props;

  return <NewReadingStep2Header querent={querent} spread={spread} />;
}
