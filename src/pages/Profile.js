import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const Profile = () => {
	return (
		<>
			<Layout style={{ height: '100%' }}>
				<Header>Header</Header>
				<Content>Content</Content>
				<Footer>Footer</Footer>
			</Layout>
		</>
	);
};

export default Profile;
