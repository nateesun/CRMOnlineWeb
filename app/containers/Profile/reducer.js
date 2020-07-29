import produce from "immer"
import {
  LOAD_PROFILE,
  LOAD_PROFILE_SUCCESS,
  LOAD_PROFILE_ERROR,
} from "./constants"

export const initialState = {
  profile: null,
  error: null,
}

/* eslint-disable default-case, no-param-reassign */
const profileReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_PROFILE:
        draft.profile = action.payload
        break
      case LOAD_PROFILE_SUCCESS:
        draft.profile = action.payload
        break
      case LOAD_PROFILE_ERROR:
        draft.profile = action.payload
        break
    }
  })

export default profileReducer
