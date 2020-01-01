export const SAVE_NEW_SPREAD = 'SPREADS__SAVE_NEW_SPREAD';

export type Topic =
  | 'general'
  | 'health'
  | 'home'
  | 'love'
  | 'money'
  | 'relationships';

export interface Spread {
  author: string;
  name: string;
  numberOfPositions: number;
  positions: string[];
  spreadUUID: number;
}

export interface SpreadsState {
  spreads: Spread[];
}
