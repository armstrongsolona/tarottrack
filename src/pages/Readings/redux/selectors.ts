import { ReadingState } from './types';

export const getNewReadingState = (state: ReadingState) => {
  return state;
};

export const getNewReadingQuerent = (state: ReadingState) => {
  return getNewReadingState(state).querent;
};

export const getNewReadingQuestion = (state: ReadingState) => {
  return getNewReadingState(state).question;
};

export const getNewReadingDrawMethod = (state: ReadingState) => {
  return getNewReadingState(state).drawMethod;
};

export const getNewReadingTimestamp = (state: ReadingState) => {
  return getNewReadingState(state).timestamp;
};

export const getNewReadingSpreadUUID = (state: ReadingState) => {
  return getNewReadingState(state).spreadUUID;
};

export const getNewReadingTopic = (state: ReadingState) => {
  return getNewReadingState(state).topic;
};

export const getNewReadingCardsDrawn = (state: ReadingState) => {
  return getNewReadingState(state).cardsDrawn;
};
