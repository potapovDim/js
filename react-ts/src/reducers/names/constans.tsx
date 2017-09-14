export const ADD_NEW_NAME = 'ADD_NEW_NAME';
export type ADD_NEW_NAME = typeof ADD_NEW_NAME;

export const REMOVE_NAME = 'REMOVE_NAME';
export type REMOVE_NAME = typeof REMOVE_NAME;

export interface StoreState {
  names: Array<string>;
}