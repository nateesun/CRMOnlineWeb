import { createSelector } from "reselect"
import { initialState } from "./reducer"

const selectRegister = (state) => state.register || initialState

const makeSelectMember = () =>
  createSelector(selectRegister, registerState => registerState.member)

const makeRegisterStatus = () =>
  createSelector(selectRegister, registerState => registerState.status)

export { selectRegister, makeSelectMember, makeRegisterStatus }
