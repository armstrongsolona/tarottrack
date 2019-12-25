import React from 'react';
import Frame from '../../shared/Frame/Frame';
import Card from '../../shared/Card/Card';
import { ROUTES } from '../../../constants/routes';

const CardMeanings = () => {
  return (
    <Frame
      title='Card meanings'
      callToActionLink={ROUTES.READINGS_NEW}
      callToActionText='New reading'
    >
      <Card title='Cards'>Generic card meanings</Card>
    </Frame>
  );
};

export default CardMeanings;
