// import { createStore } from 'redux';
// import leaveReducer from './reducer';

// const initialState = {
//   // Define your initial state here
//   // leaveRequests: [],
//   email:'',
// };
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_EMAIL':
//       return { ...state, email: action.payload.email};
//     default:
//       return state;
//   }
// };
// const store = createStore(reducer, initialState);

// export default store;
import { createStore } from 'redux';

const initialState = {
  email: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload.email};
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
