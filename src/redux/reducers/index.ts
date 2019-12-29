import { combineReducers } from 'redux';
import { newReadingReducer } from '../../pages/Readings/redux/reducers';

export const rootReducer = combineReducers({
  readings: newReadingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
