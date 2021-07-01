import { Form, Row, Input, Button } from 'antd';
import React from 'react';

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};

const validateMessages = {
	required: '${label} is required!',
	types: {
		email: '${label} is not a valid email!',
		number: '${label} is not a valid number!',
	},
	number: {
		range: '${label} must be between ${min} and ${max}',
	},
};

const Register = () => {
	const wrapper = React.createRef();
	const onFinish = (values) => {
		console.log(123, values);
	};

	const onFinishFailed = (values) => {
		console.log(456, values);
	};

	return (
		<Row
			ref={wrapper}
			align="middle"
			justify="space-around"
			style={{ height: '100%' }}
		>
			<Form
				{...layout}
				name="nest-messages"
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				validateMessages={validateMessages}
			>
				<Form.Item
					name={['user', 'name']}
					label="User Name"
					rules={[{ required: true, min: 6 }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					name={['password']}
					label="Password"
					rules={[{ required: true }]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item
					name={['confirmPassword']}
					label="Password Confirm"
					rules={[{ required: true }]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item name={'firstName'} label={'First Name'}>
					<Input />
				</Form.Item>

				<Form.Item name={'lastName'} label={'Last Name'}>
					<Input />
				</Form.Item>

				<Form.Item
					name={['user', 'email']}
					label={'Email'}
					rules={[{ type: 'email' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</Row>
	);
};

export default Register;
