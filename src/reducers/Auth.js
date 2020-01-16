import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../constants'
import { PURGE } from "redux-persist";
// CHANGE BACK
const initialState = {
  user: null,
  error: false,
}

export function authReducer(state = initialState, action){
	switch(action.type){
		case LOG_IN:
			return {
				...state,
        user: null,
        error: false,
			}
		case LOG_IN_SUCCESS:
			return {
				...state,
        user: action.data,
        error: false,
			}
		case LOG_IN_FAILURE:
			return {
				...state,
        user: null,
        error: true
      }
    case 'persist/PURGE':
      return state
		default:
			return state
	}
}