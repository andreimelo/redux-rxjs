import { FETCH } from '../../../helpers/user-fetch-constants';

export const fetchUser = (id) => ({ type: FETCH.USER, payload: id });
export const fetchUserFulfilled = (payload) => ({ type: FETCH.USER_FULFILLED, payload });
export const cancelFetchUser = () => ({ type: FETCH.USER_CANCELLED });
