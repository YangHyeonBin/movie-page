import { combineReducers } from 'redux';
import userReducer from './user';

const rootReducer = combineReducers({
  // 여러 가지 리듀서들을 쉼표로 나열하면 합쳐짐 -> 합친 것을 스토어에 전달한다!
  userReducer,
});

export default rootReducer;
