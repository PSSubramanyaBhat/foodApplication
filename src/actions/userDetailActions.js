import {COUNTER_CHANGE} from '../constants/reduxConstants';

export function changeCount(count) {
  //   const payload = {
  //     count,
  //   };
  return {
    type: COUNTER_CHANGE,
    payload: count,
    // data: payload,
  };
}
