import React from 'react';
import Frame from '../../shared/Frame/Frame';
import Card from '../../shared/Card/Card';

const SavedReadings = () => {
  return (
    <Frame title='Saved readings'>
      <Card title='Behold my title'>
        List of saved readings. <a href='/'>This is a link</a>
      </Card>
    </Frame>
  );
};

export default SavedReadings;
