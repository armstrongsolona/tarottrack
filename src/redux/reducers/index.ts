import { combineReducers } from 'redux';
import { newReading } from '../../pages/Readings/redux/reducers';

export const rootReducer = combineReducers({
  newReading,
});

export type RootState = ReturnType<typeof rootReducer>;
