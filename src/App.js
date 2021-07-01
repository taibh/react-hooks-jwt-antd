import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	useHistory,
} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Spinner from './components/Spinner';
import CommonLayout from './layout/CommonLayout';
import { LoadingStateProvider } from './stores/spinner-store';
import NotFound from './pages/NotFound';
import PrivateRoute from './routes/PrivateRoute';
import useFindUser from './hooks/useFindUser';
import axios from 'axios';
import axiosConfig from './configs/axios-config';
import NotAuthorized from './pages/NotAuthorized';
import { createBrowserHistory } from 'history';
import { useEffect, useState } from 'react';
import { UserContext } from './contexts/UserContext';

const App = () => {
	axiosConfig();
	const { user, setUser, isLoading } = useFindUser();

	console.log(123, user);

	return (
		<div className="App">
			<UserContext.Provider value={{ user, setUser }}>
				<Router>
					<Switch>
						<PrivateRoute exact path="/" component={CommonLayout} />
						<Route path="/login" component={Login} />
						<Route component={NotFound} />
					</Switch>
				</Router>
			</UserContext.Provider>
		</div>
	);
};

export default App;
