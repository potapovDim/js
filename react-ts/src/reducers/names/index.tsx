
import { NamesActions } from './actions';
import { StoreState, ADD_NEW_NAME, REMOVE_NAME } from './constans';

export function names(state: StoreState, action: NamesActions): StoreState {
  switch(action.type) {
    case ADD_NEW_NAME: {
      return { ...state, names: [...state.names, action.name] };
    }
    case REMOVE_NAME: {
      // console.log('!!!!!!', action.name)
      return { ...state, names: state.names.filter(name => name != action.name) };
    }
    default:
      return { names: [] };
  };
};