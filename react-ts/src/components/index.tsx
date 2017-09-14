import { Names } from './Names';
import * as actions from '../reducers/names/actions';
import { StoreState } from '../reducers/names/constans';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ names }: StoreState) {
  return {
    names
  };
};

export function mapDispatchToProps(dispatch: Dispatch<actions.NamesActions>) {
  return {
    addName: (name: string) => {
      dispatch(actions.addNewName(name))
    },
    removeName: (name: string) => dispatch(actions.removeName(name)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Names);