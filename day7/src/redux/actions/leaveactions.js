// Define your action types
export const ADD_LEAVE_REQUEST = 'ADD_LEAVE_REQUEST';

// Define your action creators
export const addLeaveRequest = (leaveRequest) => ({
  type: ADD_LEAVE_REQUEST,
  payload: leaveRequest,
});
