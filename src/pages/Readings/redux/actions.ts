export const SAVE_NEW_READING = 'READINGS__SAVE_NEW_READING';

export interface Reading {
  querentValue: string;
  questionValue: string;
  drawMethodValue: string;
  spread: string; // TODO: Create Spread interface
  timestamp: Date;
  topic: string; // TODO: Create Topic (category) interface
}

export interface ReadingsState {
  readings: Reading[];
}

export interface SaveNewReadingAction {
  type: typeof SAVE_NEW_READING;
  payload: Reading;
}

export type ReadingsTypes = SaveNewReadingAction;

export const saveNewReading = (newReading: Reading): ReadingsTypes => {
  return {
    type: SAVE_NEW_READING,
    payload: newReading,
  };
};
