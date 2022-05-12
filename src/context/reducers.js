import { backGroundConstats } from './contstant'

export const backGoundChangeReducer = (state, action) => {
  switch (action.type) {
    case backGroundConstats.CHANGE_BACKGROUND:
      return {
        ...state,
        backgroundColor: action.payload,
      }
    default:
      return state
  }
}
