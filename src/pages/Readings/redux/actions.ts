import { DrawMethod, NewReadingTypes, READINGS_ACTIONS } from './types';
import { Topic } from '../../Spreads/redux/types';

export const updateQuerent = (payload: string): NewReadingTypes => {
  return {
    type: READINGS_ACTIONS.UPDATE_QUERENT,
    payload: payload,
  };
};

export const updateQuestion = (payload: string): NewReadingTypes => {
  return {
    type: READINGS_ACTIONS.UPDATE_QUESTION,
    payload: payload,
  };
};

export const updateDrawMethod = (payload: DrawMethod): NewReadingTypes => {
  return {
    type: READINGS_ACTIONS.UPDATE_DRAW_METHOD,
    payload: payload,
  };
};

export const updateTimestamp = (payload: Date): NewReadingTypes => {
  return {
    type: READINGS_ACTIONS.UPDATE_TIMESTAMP,
    payload: payload,
  };
};

export const updateSpreadUUID = (payload: string): NewReadingTypes => {
  return {
    type: READINGS_ACTIONS.UPDATE_SPREAD_UUID,
    payload: payload,
  };
};

export const updateTopic = (payload: Topic): NewReadingTypes => {
  return {
    type: READINGS_ACTIONS.UPDATE_TOPIC,
    payload: payload,
  };
};

export const updateCardsDrawn = (payload: number[]): NewReadingTypes => {
  return {
    type: READINGS_ACTIONS.UPDATE_CARDS_DRAWN,
    payload: payload,
  };
};
