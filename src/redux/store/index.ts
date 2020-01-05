import { createStore } from 'redux';
import { newReading } from '../../pages/Readings/redux/reducers';

const store = createStore(newReading);

export default store;
