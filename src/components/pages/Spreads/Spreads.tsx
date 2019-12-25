import React from 'react';
import Frame from '../../shared/Frame/Frame';
import SpreadsList from './SpreadsList';
import { ROUTES } from '../../../constants/routes';

const Spreads = () => {
  return (
    <Frame
      title='Spreads'
      callToActionLink={ROUTES.SPREADS}
      callToActionText='New spread'
    >
      <SpreadsList
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
          {
            author: 'Tamara Fines',
            description: 'Good for general readings on any topic.',
            name: 'Past Present Future',
            positions: 10,
            url: '/',
          },
          {
            author: 'Tamara Fines',
            description: 'Good for general readings on any topic.',
            name: 'Celtic Cross',
            positions: 10,
            url: '/',
          },
        ]}
      />
    </Frame>
  );
};

export default Spreads;
