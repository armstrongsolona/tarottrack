import { createStore } from 'redux';
// import { rootReducer } from '../reducers/index';
import { newReading } from '../../pages/Readings/redux/reducers';

const store = createStore(newReading);

export default store;
