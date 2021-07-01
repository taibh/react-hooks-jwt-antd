import { Layout, Breadcrumb, Row } from 'antd';

import LayoutSider from './LayoutSider';
import Footer from './Footer';
import LayoutHeader from './LayoutHeader';

const CommonLayout = () => {
	return (
		<Layout style={{ minHeight: '100%' }}>
			<LayoutSider />
			<Layout className="site-layout">
				<LayoutHeader />
				<Layout.Content style={{ margin: '0 16px' }}>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>User</Breadcrumb.Item>
						<Breadcrumb.Item>Bill</Breadcrumb.Item>
					</Breadcrumb>
					<div
						className="site-layout-background"
						style={{ padding: 24, minHeight: 360 }}
					>
						Bill is a cat.
					</div>
				</Layout.Content>

				<Footer />
			</Layout>
		</Layout>
	);
};

export default CommonLayout;
