import { ofType } from 'redux-observable';
import { mergeMap, map, takeUntil, filter } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { FETCH } from '../../../helpers/user-fetch-constants';
import { fetchUserFulfilled } from '../actions/fetchUserAction';
import { develop } from '../../../helpers/develop-server-url';

export const fetchUserEpic = (action$) => {
	return action$.pipe(
		ofType(FETCH.USER),
		mergeMap((action) =>
			ajax
				.getJSON(
					`${develop.local}webapi/reports/getreport_fopm?branch_code=FOPM000001&start_date=2019-03-09T16:00:00.000Z&end_date=2019-06-10T15:59:59.999Z&client_code=FOPM&floor_desc=All&location_desc=All&device_name=All`,
					// posts
				)
				.pipe(
					map((response) => fetchUserFulfilled(response)),
					takeUntil(
						action$.pipe(
							filter((action) => action.type === FETCH.USER_CANCELLED),
						),
					),
				),
		),
	);
};
