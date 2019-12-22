import React from 'react';
import Frame from '../../shared/Frame/Frame';
import SavedReadingsList from './SavedReadingsList';

const SavedReadings = () => {
  return (
    <Frame title='Saved readings'>
      <SavedReadingsList
        data={[
          {
            date: '2019/12/02',
            querent: { name: 'Johnny Appleseed', url: '/' },
            question: {
              name: 'What will happen if I meet her?',
              url: '/',
            },
            spread: {
              name: 'Celtic Cross',
              url: '/spreads/celtic-cross',
            },
            topic: 'love',
          },
          {
            date: '2019/11/28',
            querent: { name: 'Mary Contrary', url: '/' },
            question: {
              name: 'What steps should I take in order to stay healthy?',
              url: '/',
            },
            spread: {
              name: 'Three Card Spread',
              url: '/spreads/celtic-cross',
            },
            topic: 'health',
          },
          {
            date: '2019/11/27',
            querent: { name: 'Peter Piper', url: '/' },
            question: {
              name: 'How many pickles should I pick to make enough money?',
              url: '/',
            },
            spread: {
              name: 'One Card Spread',
              url: '/spreads/celtic-cross',
            },
            topic: 'money',
          },
          {
            date: '2019/11/27',
            querent: { name: 'Miss Muffet', url: '/' },
            question: {
              name: 'What would I be most fulfilled doing?',
              url: '/',
            },
            spread: {
              name: 'One Card Spread',
              url: '/spreads/celtic-cross',
            },
            topic: 'home',
          },
          {
            date: '2019/11/27',
            querent: { name: 'Angus Hughes', url: '/' },
            question: {
              name:
                'How many rings do I need to make in order to pay my taxes?',
              url: '/',
            },
            spread: {
              name: 'One Card Spread',
              url: '/spreads/celtic-cross',
            },
            topic: 'money',
          },
        ]}
      />
    </Frame>
  );
};

export default SavedReadings;
