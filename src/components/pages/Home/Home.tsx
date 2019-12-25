import React from 'react';
import Frame from '../../shared/Frame/Frame';
import Card from '../../shared/Card/Card';
import { ROUTES } from '../../../constants/routes';

const SavedReadings = () => {
  return (
    <Frame
      title='Home'
      callToActionLink={ROUTES.READINGS_NEW}
      callToActionText='New reading'
    >
      <Card title='Behold my title'>
        This is the home page and OMG it's working
      </Card>
    </Frame>
  );
};

export default SavedReadings;
