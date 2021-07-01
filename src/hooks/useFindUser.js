import axios from 'axios';
import { useEffect, useState } from 'react';
const API_URL = 'http://localhost:8080/api/users';

import authHeader from '../services/auth-header';

const useFindUser = () => {
	const [user, setUser] = useState(null);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get('users/info');
			setUser(result.data);
		};
		fetchData();
	}, []);

	return { user, setUser, isLoading };
};

export default useFindUser;
