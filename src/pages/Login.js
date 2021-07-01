import { Form, Input, Button, Checkbox, Row, message } from 'antd';
import { useContext } from 'react';
import { LoadingStore, spinnerAction } from '../stores/spinner-store';

import AuthService from '../services/auth.service';
import useAuth from '../hooks/useAuth';

const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};
const tailLayout = {
	wrapperCol: {
		offset: 8,
		span: 16,
	},
};

const validateMessages = {
	required: '${label} is required!',
	string: {
		min: '${label} must be at least 6 character',
	},
};

const Login = () => {
	const { login } = useAuth();

	const onFinish = (values) => {
		login(values.user);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Row justify="space-around" align="middle" style={{ height: '100%' }}>
			<Form
				{...layout}
				style={{ width: '400px' }}
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				validateMessages={validateMessages}
			>
				<Form.Item
					label="Username"
					name={['user', 'username']}
					rules={[
						{
							required: true,
							min: 6,
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Password"
					name={['user', 'password']}
					rules={[
						{
							required: true,
							min: 8,
						},
					]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item {...tailLayout} name="remember" valuePropName="checked">
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Form.Item {...tailLayout}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</Row>
	);
};

export default Login;
