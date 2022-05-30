import {COUNTER_CHANGE} from '../constants/reduxConstants';
import {combineReducers} from 'redux';

// const countReducer = (state = {}, action) => {
//   switch (action.type) {
//     case COUNTER_CHANGE:
//       return action.data;
//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   countReducer,
// });

const initialState = {
  count: 0,
};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_CHANGE:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

export default countReducer;
/* -------------------------------------------------------------------------------------------------------------- */

// THIS METHOD UPDATES A SPECIFIC VALUE AMONGST A SET OF VALUES IN A REDUX STORE and RETURNS EVERYTHING BACK

/*
    const initialState = {
        count: 0,
    };
    const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_CHANGE:
        return {
            ...state,
            count: action.payload,
        };
        default:
        return state;
    }
    };
*/

// THIS METHOD UPDATES ONLY A SPECIFIC VALUE and RETURNS THAT BACK

/*
    const activityResultSuccess = (state = {}, action) => {
    switch (action.type) {
        case ACTIVITY_RESULT_DATA:
        return action.data;
        default:
        return state;
    }
    };
*/

// This sends one set of reducer values with updated value corresponding to a specific action function...
/* export default countReducer; */

// THIS Method combines a set of multiple reducers and sends it as a file of reducer values.
/*
    export default combineReducers({
        countReducer,
    });
*/
