import React from 'react';
import Frame from './components/shared/Frame/Frame';
import Button from './components/shared/Button/Button';
import Card, { CardSection } from './components/shared/Card/Card';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Frame title="Saved readings">
        <Card title="This is a card">
          This is some card content. Much longer so I can actually see this
          thing expand.
          <CardSection>
            Another section with some more sentences that fit into whatever goes
            below and now I can see it all.
          </CardSection>
          <CardSection>
            Another section with some more sentences that fit into whatever goes
            below and now I can see it all.
          </CardSection>
        </Card>
      </Frame>
    </div>
  );
};

export default App;
