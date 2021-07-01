import axios from 'axios';

const axiosConfig = () => {
	const token = localStorage.getItem('token');

	axios.interceptors.request.use(
		(config) => {
			config.baseURL = 'http://localhost:8080/api/';
			config.headers = { Authorization: `Bearer ${token}` };
			return config;
		},
		(error) => {
			console.log('request error');
		}
	);
	axios.interceptors.response.use(
		(res) => {
			console.log('res', res);
			return Promise.resolve(res);
		},
		(error) => {
			const statusCode =
				(error.response &&
					error.response.data &&
					error.response.data.statusCode) ||
				error.statusCode;

			return Promise.reject(error);
		}
	);
};

export default axiosConfig;
