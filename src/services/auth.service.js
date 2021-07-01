import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

const register = (
	username,
	password,
	firstName,
	lastName,
	email,
	confirmPassword
) => {
	return axios.post(`${API_URL}/register`, {
		username,
		password,
		firstName,
		lastName,
		email,
		confirmPassword,
	});
};

const login = (username, password) => {
	return axios.post(`${API_URL}/login`, { username, password }).then((res) => {
		if (res.token) {
			localStorage.setItem('user', JSON.stringify(res));
		}
		return res;
	});
};

const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem('user')).user;
};

const logout = () => {
	localStorage.removeItem('user');
};

export default { register, login, logout, getCurrentUser };
