import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = (props) => {
	const user = useContext(UserContext);

	const { component: Component, ...rest } = props;
	if (user) {
		return <Route {...rest} render={(props) => <Component {...props} />} />;
	} else {
		return <Redirect to="/login" />;
	}
};

export default PrivateRoute;
