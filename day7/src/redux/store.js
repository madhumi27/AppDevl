import { createStore } from 'redux';
import leaveReducer from './reducer';

const initialState = {
  // Define your initial state here
  leaveRequests: [],
};

const store = createStore(leaveReducer, initialState);

export default store;
