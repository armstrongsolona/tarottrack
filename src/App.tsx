import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import SavedReadings from './components/pages/Readings/SavedReadings';
import NewReading from './components/pages/Readings/NewReading';
import Spreads from './components/pages/Spreads/Spreads';
import CardMeanings from './components/pages/Cards/CardMeanings';
import { ROUTES } from './constants/routes';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.READINGS} component={SavedReadings} />
        <Route exact path={ROUTES.READINGS_NEW} component={NewReading} />
        <Route exact path={ROUTES.SPREADS} component={Spreads} />
        <Route exact path={ROUTES.CARDS_MEANINGS} component={CardMeanings} />
      </div>
    </Router>
  );
};

export default App;
