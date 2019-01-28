import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import reducers from './reducers/rootReducer.js';
import { getAllTitles } from './actions/action.js';
import App from './App';

const store = createStore(
	reducers,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f,
	)
);

store.dispatch(getAllTitles());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
