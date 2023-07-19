import { combineReducers } from 'redux';
import leaveReducer from './leaveReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  leave: leaveReducer,
  auth: authReducer
});

export default rootReducer;
