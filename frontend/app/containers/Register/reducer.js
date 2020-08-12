import produce from "immer"
import {
  ADD_REGISTER_MEMBER,
  ADD_REGISTER_MEMBER_ERROR,
  ADD_REGISTER_MEMBER_SUCCESS,
} from "./constants"

export const initialState = {
  member: {
    prefix: "",
    firstName: "",
    lastName: "",
    mobile: "",
    username: "",
    password: "",
  },
  status: "",
}

/* eslint-disable default-case, no-param-reassign */
const registerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_REGISTER_MEMBER:
        draft.member.prefix = action.payload.prefix
        draft.member.firstName = action.payload.firstName
        draft.member.lastName = action.payload.lastName
        draft.member.mobile = action.payload.mobile
        draft.member.dateStr = action.payload.dateStr
        draft.member.username = action.payload.username
        draft.member.password = action.payload.password
        break
      case ADD_REGISTER_MEMBER_SUCCESS:
        draft.status = 'Success'
        break
      case ADD_REGISTER_MEMBER_ERROR:
        draft.status = action.error
        break
    }
  })

export default registerReducer
