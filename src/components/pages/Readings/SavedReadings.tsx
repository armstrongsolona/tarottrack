import React from 'react';
import Frame from '../../shared/Frame/Frame';
import Card from '../../shared/Card/Card';
import DataTable from '../../shared/DataTable/DataTable';

const SavedReadings = () => {
  return (
    <Frame title='Saved readings'>
      <DataTable
        headers={['Date', 'Querent', 'Question', 'Spread', 'Topic']}
        rows={[
          [
            '2019/12/02',
            '2019/11/29',
            '2019/12/02',
            '2019/11/29',
            '2019/11/29',
          ],
          [<a href='/'>Me</a>, 'Me', 'Me', 'Me', 'Me'],
          [
            'What will happen if I do something long',
            'What will...',
            'What will...',
            'What will...',
            'What will...',
          ],
          [
            'Celtic Cross',
            'Celtic Cross',
            'Celtic Cross',
            'Celtic Cross',
            'Celtic Cross',
          ],
          ['Love', 'Love', 'Love', 'Love', 'Love'],
        ]}
      />
    </Frame>
  );
};

export default SavedReadings;
