import { FETCH } from '../../../helpers/user-fetch-constants';

const initialState = {};
export const Users = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case FETCH.USER:
			return {
				loading   : true,
				cancelled : false,
			};
		case FETCH.USER_FULFILLED:
			return {
				...state,
				loading   : false,
				cancelled : false,
				data      : payload,
			};
		case FETCH.USER_CANCELLED:
			return {
				loading   : false,
				cancelled : true,
			};
		default:
			return state;
	}
};
