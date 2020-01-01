import { NewReadingState } from './types';

export const getNewReadingState = (state: NewReadingState) => {
  return state;
};

export const getNewReadingQuerent = (state: NewReadingState) => {
  return getNewReadingState(state).querent;
};

export const getNewReadingQuestion = (state: NewReadingState) => {
  return getNewReadingState(state).question;
};

export const getNewReadingDrawMethod = (state: NewReadingState) => {
  return getNewReadingState(state).drawMethod;
};

export const getNewReadingTimestamp = (state: NewReadingState) => {
  return getNewReadingState(state).timestamp;
};

export const getNewReadingSpreadUUID = (state: NewReadingState) => {
  return getNewReadingState(state).spreadUUID;
};

export const getNewReadingTopic = (state: NewReadingState) => {
  return getNewReadingState(state).topic;
};

export const getNewReadingCardsDrawn = (state: NewReadingState) => {
  return getNewReadingState(state).cardsDrawn;
};
