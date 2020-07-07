import produce from "immer"
import {
  ADD_REGISTER_MEMBER,
  ADD_REGISTER_MEMBER_ERROR,
  ADD_REGISTER_MEMBER_SUCCESS,
} from "./constants"

export const initialState = {
  member: {
    prefix: "",
    fullName: "",
    mobile: "",
    username: "",
    password: "",
  },
  error: "",
}

/* eslint-disable default-case, no-param-reassign */
const registerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_REGISTER_MEMBER:
        draft.member.prefix = action.payload.prefix
        draft.member.fullName = action.payload.fullName
        draft.member.mobile = action.payload.mobile
        draft.member.username = action.payload.username
        draft.member.password = action.payload.password
        break
      case ADD_REGISTER_MEMBER_SUCCESS:
        break
      case ADD_REGISTER_MEMBER_ERROR:
        // draft.error = action.error
        break
    }
  })

export default registerReducer
