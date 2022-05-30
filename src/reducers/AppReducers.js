import {combineReducers} from 'redux';
import UserDetailsReducer from './UserDetailsReducer';

const AppReducer = combineReducers({
  userDetails: UserDetailsReducer,
});

const mainReducer = (state = {}, action) => {
  switch (action.type) {
    case 'hydrate':
      return action.payload;
    default:
      return AppReducer(state, action);
  }
};
export default mainReducer;
