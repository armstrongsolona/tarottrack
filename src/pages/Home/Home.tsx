import React from 'react';
import styled from 'styled-components';
import Frame from '../../components/shared/Frame/Frame';
import HomeCardSavedReadings from './components/HomeCardSavedReadings';
import HomeCardSpreads from './components/HomeCardSpreads';
import { ROUTES } from '../../constants/routes';

const SavedReadings = () => {
  return (
    <Frame
      title='Home'
      callToActionLink={ROUTES.READINGS_NEW}
      callToActionText='New reading'
    >
      <HomeMain>
        <HomeCardSavedReadings
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
          ]}
          total={12}
        />

        <HomeCardSpreads
          data={[
            {
              author: 'Tamara Fines',
              description: 'Good for general readings on any topic.',
              name: 'Celtic Cross',
              positions: 10,
              url: '/',
            },
            {
              author: 'Tamara Fines',
              description: 'Good for general readings on any topic.',
              name: 'One Card Spread',
              positions: 1,
              url: '/',
            },
            {
              author: 'Tamara Fines',
              description: 'Good for general readings on any topic.',
              name: 'Three Card Spread',
              positions: 10,
              url: '/',
            },
          ]}
          total={15}
        />
      </HomeMain>
    </Frame>
  );
};

export const HomeMain = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default SavedReadings;
