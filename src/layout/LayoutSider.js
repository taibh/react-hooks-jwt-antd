import { Layout, Menu } from 'antd';
import { useState } from 'react';
import logo from '../assets/logo.png';

import {
	DesktopOutlined,
	PieChartOutlined,
	FileOutlined,
	TeamOutlined,
	UserOutlined,
} from '@ant-design/icons';

export const LayoutSider = () => {
	const [collapsed, setCollapsed] = useState(false);

	const onCollapse = (value) => {
		setCollapsed(value);
	};
	return (
		<Layout.Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
			<div style={{ height: '60px', padding: '2px' }}>
				<img style={{ height: '55px' }} src={logo}></img>
			</div>
			<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
				<Menu.Item key="1" icon={<PieChartOutlined />}>
					Option 1
				</Menu.Item>
				<Menu.Item key="2" icon={<DesktopOutlined />}>
					Option 2
				</Menu.Item>
				<Menu.SubMenu key="sub1" icon={<UserOutlined />} title="User">
					<Menu.Item key="3">Tom</Menu.Item>
					<Menu.Item key="4">Bill</Menu.Item>
					<Menu.Item key="5">Alex</Menu.Item>
				</Menu.SubMenu>
				<Menu.SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
					<Menu.Item key="6">Team 1</Menu.Item>
					<Menu.Item key="8">Team 2</Menu.Item>
				</Menu.SubMenu>
				<Menu.Item key="9" icon={<FileOutlined />}>
					Files
				</Menu.Item>
			</Menu>
		</Layout.Sider>
	);
};

export default LayoutSider;
