import { createReducer } from 'redux-create-reducer';
import { NewReadingState, READINGS_ACTIONS } from './types';

const INITIAL_STATE: NewReadingState = {
  querent: '',
  question: '',
  drawMethod: 'deck',
  timestamp: new Date(),
  spreadUUID: 0,
  topic: 'love',
  cardsDrawn: [],
};

export const newReading = (
  state = INITIAL_STATE,
  action: any,
): NewReadingState => {
  switch (action.type) {
    case READINGS_ACTIONS.UPDATE_QUERENT:
      return {
        querent: action.payload,
        question: state.question,
        drawMethod: state.drawMethod,
        timestamp: state.timestamp,
        spreadUUID: state.spreadUUID,
        topic: state.topic,
        cardsDrawn: state.cardsDrawn,
      };

    case READINGS_ACTIONS.UPDATE_QUESTION:
      return {
        querent: state.querent,
        question: action.payload,
        drawMethod: state.drawMethod,
        timestamp: state.timestamp,
        spreadUUID: state.spreadUUID,
        topic: state.topic,
        cardsDrawn: state.cardsDrawn,
      };

    case READINGS_ACTIONS.UPDATE_DRAW_METHOD:
      return {
        querent: state.querent,
        question: state.question,
        drawMethod: action.payload,
        timestamp: state.timestamp,
        spreadUUID: state.spreadUUID,
        topic: state.topic,
        cardsDrawn: state.cardsDrawn,
      };

    case READINGS_ACTIONS.UPDATE_TIMESTAMP:
      return {
        querent: state.querent,
        question: state.question,
        drawMethod: state.drawMethod,
        timestamp: action.payload,
        spreadUUID: state.spreadUUID,
        topic: state.topic,
        cardsDrawn: state.cardsDrawn,
      };

    case READINGS_ACTIONS.UPDATE_SPREAD_UUID:
      return {
        querent: state.querent,
        question: state.question,
        drawMethod: state.drawMethod,
        timestamp: state.timestamp,
        spreadUUID: action.payload,
        topic: state.topic,
        cardsDrawn: state.cardsDrawn,
      };

    case READINGS_ACTIONS.UPDATE_TOPIC:
      return {
        querent: state.querent,
        question: state.question,
        drawMethod: state.drawMethod,
        timestamp: state.timestamp,
        spreadUUID: state.spreadUUID,
        topic: action.payload,
        cardsDrawn: state.cardsDrawn,
      };

    case READINGS_ACTIONS.UPDATE_TOPIC:
      return {
        querent: state.querent,
        question: state.question,
        drawMethod: state.drawMethod,
        timestamp: state.timestamp,
        spreadUUID: state.spreadUUID,
        topic: state.topic,
        cardsDrawn: action.payload,
      };

    default:
      return state;
  }
};

const handlers: any = {
  [READINGS_ACTIONS.UPDATE_QUERENT]: newReading,
  [READINGS_ACTIONS.UPDATE_QUESTION]: newReading,
  [READINGS_ACTIONS.UPDATE_DRAW_METHOD]: newReading,
  [READINGS_ACTIONS.UPDATE_TIMESTAMP]: newReading,
  [READINGS_ACTIONS.UPDATE_SPREAD_UUID]: newReading,
  [READINGS_ACTIONS.UPDATE_TOPIC]: newReading,
  [READINGS_ACTIONS.UPDATE_CARDS_DRAWN]: newReading,
};

export default createReducer(INITIAL_STATE, handlers);
