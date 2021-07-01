import { Layout, Row } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { useHistory } from 'react-router-dom';

const LayoutHeader = () => {
	let history = useHistory();
	const handleClick = (e) => {
		if (e.key === 'logout') {
			console.log(12321321, e);
			localStorage.removeItem('token');
			history.push('/');
		}
	};
	const menu = (
		<Menu onClick={handleClick}>
			<Menu.Item key="0">
				<a>1st menu item</a>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key="logout">
				Logout
				<LogoutOutlined style={{ marginLeft: '8px' }} />
			</Menu.Item>
		</Menu>
	);
	return (
		<Layout.Header style={{ padding: 0 }}>
			<Row
				align="middle"
				style={{ height: '100%', paddingRight: '4px' }}
				justify="end"
			>
				<Dropdown overlay={menu} trigger={['click']}>
					<Avatar
						size="large"
						icon={<UserOutlined />}
						onClick={(e) => e.preventDefault()}
					/>
				</Dropdown>
			</Row>
		</Layout.Header>
	);
};

export default LayoutHeader;
