import { SET_POINTS, setPoints } from '../actions'

const initialState = {
  points: 0
}

export default function progressReducer (state = initialState, action) {
  switch (action.type) {
    case SET_POINTS: {
      return {
        ...state,
        points: action.points
      }
    }
    default: {
      return state
    }
  }
}

