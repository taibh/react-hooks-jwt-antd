import axios from 'axios';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const useAuth = () => {
	const history = useHistory();

	const { setUser } = useContext(UserContext);

	const login = (data) => {
		const { username, password } = data;
		let { from } = location.state || { from: { pathname: '/' } };
		return axios.post('users/login', { username, password }).then((res) => {
			console.log('login', res.data.user);
			localStorage.setItem('token', res.data.token);
			setUser(res.data.user);
			history.replace(from);
		});
	};

	return {
		login,
	};
};

export default useAuth;
