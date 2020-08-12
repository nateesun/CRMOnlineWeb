import { createSelector } from "reselect"
import { initialState } from "./reducer"

const selectLogin = (state) => state.login || initialState

const makeSelectLogin = () =>
  createSelector(selectLogin, (loginState) => loginState.loginForm)

const makeSelectProfile = () =>
  createSelector(selectLogin, (loginState) => loginState.profile)

const makeLoggedIn = () =>
  createSelector(selectLogin, (loginState) => loginState.loggedIn)

const makeLoginError = () =>
  createSelector(selectLogin, (loginState) => loginState.error)

export {
  selectLogin,
  makeSelectLogin,
  makeSelectProfile,
  makeLoggedIn,
  makeLoginError,
}
