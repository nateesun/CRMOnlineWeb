import { createSelector } from "reselect"
import { initialState } from "./reducer"

const selectRegister = (state) => state.register || initialState

const makeSelectMember = () =>
  createSelector(selectRegister, registerState => registerState.member)

export { selectRegister, makeSelectMember }
