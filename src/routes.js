import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Article from './pages/Article';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Article} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;