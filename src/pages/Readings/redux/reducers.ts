import { ReadingsState, ReadingsTypes, SAVE_NEW_READING } from './actions';

const INITIAL_STATE: ReadingsState = {
  readings: [
    {
      querentValue: '',
      questionValue: '',
      drawMethodValue: '',
      spread: '',
      timestamp: new Date(),
      topic: '',
    },
  ],
};

export const newReadingReducer = (
  state = INITIAL_STATE,
  action: ReadingsTypes,
): ReadingsState => {
  switch (action.type) {
    case SAVE_NEW_READING:
      return {
        readings: [...state.readings, action.payload],
      };
    default:
      return state;
  }
};
