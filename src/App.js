import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Pages
import Home from '../src/pages/Home';

function App(){
	return (
		<React.Fragment>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
				</Switch>
			</Router>
		</React.Fragment>
	);
}

export default App;
