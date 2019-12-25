import React from 'react';
import Frame from '../../shared/Frame/Frame';
import Card from '../../shared/Card/Card';
import { ROUTES } from '../../../constants/routes';

const SavedReadings = () => {
  return (
    <Frame
      title='New reading'
      callToActionLink={ROUTES.READINGS_NEW}
      callToActionText='New reading'
    >
      <Card title='Behold my title'>This is a new reading</Card>
    </Frame>
  );
};

export default SavedReadings;
