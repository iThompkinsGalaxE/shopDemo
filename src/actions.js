import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE, } from './constants'
import { Auth } from 'aws-amplify';

// Master Actions
export function logInFunc(email, password){
	return (dispatch) => {
		dispatch(getAuth());
		Auth.signIn(email, password)
		.then(json => {
			dispatch(getAuthSuccess(json))
		})
		.catch(err => {
			dispatch(getAuthFailure(err))
		})
	}
}


// Action Creators
// Auth
function getAuth(){
	return {
		type: LOG_IN,
	}
}

function getAuthSuccess(data){
	return {
		type: LOG_IN_SUCCESS,
		data
	}
}

function getAuthFailure(){
	return {
		type: LOG_IN_FAILURE
	}
}