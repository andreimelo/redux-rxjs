import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, cancelFetchUser } from '../../lib/redux/actions/fetchUserAction';

function Home(){
	const dispatch = useDispatch();
	const { loading, cancelled, data } = useSelector(({ Users }) => Users);
	console.log(loading, 'Loading');
	console.log(cancelled, 'Cancelled');
	console.log(data, 'Data');
	return (
		<React.Fragment>
			<button onClick={() => dispatch(fetchUser())}>Fetch Data</button>
			<button onClick={() => dispatch(cancelFetchUser())}>Cancel</button>
			<div>Results</div>
			<div>
				{
					loading ? 'Loading' :
					''}
			</div>
			{
				data === undefined ? '' :
				JSON.stringify(data)}
		</React.Fragment>
	);
}

export default Home;
