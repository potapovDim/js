import { createStore } from 'redux';
import { names } from './names/index';
import { StoreState } from './names/constans';

export const store = createStore<StoreState>(names, {
  names: []
});