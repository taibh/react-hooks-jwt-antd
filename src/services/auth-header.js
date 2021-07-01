export default function authHeader() {
	const token = localStorage.getItem('token');

	console.log(token);

	if (token) {
		return { Authorization: `Bearer ${token}` };
	} else {
		return {};
	}
}
