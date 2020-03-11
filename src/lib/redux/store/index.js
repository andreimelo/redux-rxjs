import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducers } from '../reducers';
import { rootEpics } from '../epics';
import thunkMiddleWare from 'redux-thunk';

export const initStore = (initialState) => {
	let epicMiddleware = createEpicMiddleware();
	let store = createStore(
		rootReducers,
		initialState,
		applyMiddleware(thunkMiddleWare, epicMiddleware),
		// applyMiddleware(thunkMiddleWare),
	);
	epicMiddleware.run(rootEpics);
	return store;
};
