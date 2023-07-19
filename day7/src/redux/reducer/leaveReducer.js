import { addLeaveRequest } from "../actions/leaveactions";

const initialState = {
  leaveRequests: [],
};

const leaveReducer = (state = initialState, action) => {
  switch (action.type) {
    case addLeaveRequest:
      return {
        ...state,
        leaveRequests: [...state.leaveRequests, action.payload],
      };
    default:
      return state;
  }
};

export default leaveReducer;
