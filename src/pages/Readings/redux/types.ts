import { Topic } from '../../Spreads/redux/types';

export const READINGS_ACTIONS = {
  UPDATE_QUERENT: 'READINGS__UPDATE_QUERENT',
  UPDATE_QUESTION: 'READINGS__UPDATE_QUESTION',
  UPDATE_DRAW_METHOD: 'READINGS__UPDATE_DRAW_METHOD',
  UPDATE_TIMESTAMP: 'READINGS__UPDATE_TIMESTAMP',
  UPDATE_SPREAD_UUID: 'READINGS__UPDATE_SPREAD_UUID',
  UPDATE_TOPIC: 'READINGS__UPDATE_TOPIC',
  UPDATE_CARDS_DRAWN: 'READINGS__UPDATE_CARDS_DRAWN',
};

export type DrawMethod = 'deck' | 'digital';

export interface ReadingState {
  querent: string;
  question: string;
  drawMethod: DrawMethod;
  timestamp: Date;
  spreadUUID: number;
  topic: Topic;
  cardsDrawn: number[];
}

export interface UpdateQuerentAction {
  type: typeof READINGS_ACTIONS.UPDATE_QUERENT;
  payload: string;
}

export interface UpdateQuestionAction {
  type: typeof READINGS_ACTIONS.UPDATE_QUESTION;
  payload: string;
}

export interface UpdateDrawMethodAction {
  type: typeof READINGS_ACTIONS.UPDATE_DRAW_METHOD;
  payload: DrawMethod;
}

export interface UpdateTimestampAction {
  type: typeof READINGS_ACTIONS.UPDATE_TIMESTAMP;
  payload: Date;
}

export interface UpdateSpreadUUIDAction {
  type: typeof READINGS_ACTIONS.UPDATE_SPREAD_UUID;
  payload: number;
}

export interface UpdateTopicAction {
  type: typeof READINGS_ACTIONS.UPDATE_TOPIC;
  payload: Topic;
}

export interface UpdateCardsDrawnAction {
  type: typeof READINGS_ACTIONS.UPDATE_CARDS_DRAWN;
  payload: number[];
}

export type NewReadingTypes =
  | UpdateQuerentAction
  | UpdateQuestionAction
  | UpdateDrawMethodAction
  | UpdateTimestampAction
  | UpdateSpreadUUIDAction
  | UpdateTopicAction
  | UpdateCardsDrawnAction;
