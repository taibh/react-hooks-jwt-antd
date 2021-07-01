import { Spin, Alert } from 'antd';
import { useContext, useState } from 'react';
import { LoadingStore } from '../stores/spinner-store';

import Login from '../pages/Login';

const Spinner = (props) => {
	const loadingStore = useContext(LoadingStore);

	console.log(123, loadingStore.state);

	return (
		<Spin
			tip="Loading..."
			delay={200}
			wrapperClassName="spinner"
			spinning={loadingStore.state}
		>
			{props.children}
		</Spin>
	);
};

export default Spinner;
