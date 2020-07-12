import produce from "immer"
import {
  CHECK_LOGIN,
  CHECK_LOGIN_ERROR,
  CHECK_LOGIN_SUCCESS,
} from "./constants"

export const initialState = {
  login: {
    username: "",
    password: "",
  },
  loggedIn: false,
  error: "",
}

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CHECK_LOGIN:
        draft.login.username = action.payload.username
        draft.login.password = action.payload.password
        draft.loggedIn = false
        break
      case CHECK_LOGIN_SUCCESS:
        draft.loggedIn = true
        break
      case CHECK_LOGIN_ERROR:
        draft.error = action.error
        draft.loggedIn = false
        break
    }
  })

export default loginReducer
