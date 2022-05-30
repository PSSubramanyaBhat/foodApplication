import {createStore, combineReducers} from 'redux';
import AppReducer from '../reducers/AppReducers';

// import UserDetailsReducer from '../reducers/UserDetailsReducer';
// import thunk from 'redux-thunk';
// import {persistStore, persistReducer} from 'redux-persist';
// import {createRealmPersistStorage} from '@bankify/redux-persist-realm';
// import {createTransform} from 'redux-persist';
// import Flatted from './flatted';

// const rootReducer = combineReducers({count: UserDetailsReducer});
// const rootReducer = combineReducers(AppReducer);

const rootReducer = AppReducer;

// const store = () => {
//   return createStore(rootReducer);
// };

const store = createStore(rootReducer);

export default store;
