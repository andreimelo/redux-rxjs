import { combineEpics } from 'redux-observable';
import { fetchUserEpic } from '../epics/UsersEpic';

export const rootEpics = combineEpics.apply('', Object.values({ fetchUserEpic }));
