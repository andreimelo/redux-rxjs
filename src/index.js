import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Redux config
import { Provider } from 'react-redux';
import { initStore } from './lib/redux/store';

const store = initStore(window.__SERVER_STATE__ || {});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);

serviceWorker.unregister();
