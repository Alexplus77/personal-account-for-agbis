import { ON_REGISTRATION_MODE } from "redux/actions/actionTypes";

const initialState = {
  onRegistrationMode: false,
};

export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_REGISTRATION_MODE:
      return { ...state, onRegistrationMode: true };
    default:
      return state;
  }
};
