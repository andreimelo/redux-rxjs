import { createStore, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import thunkMiddleWare from 'redux-thunk';
import getReducers from '../../reducers';
// this enables the browser dev tools to use redux dev environment
const composeEnhancers = window.devToolsExtension || compose;

const epicMiddleware = createEpicMiddleware();

export const initStore = (initialState) => {
	let store = createStore(
		getReducers(),
		initialState,
		composeEnhancers(applyMiddleware(thunkMiddleWare)),
		applyMiddleware(epicMiddleware),
	);
	return store;
};
