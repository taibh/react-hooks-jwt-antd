import React, { useReducer } from 'react';

const initialState = false;

const spinnerAction = {
	HIDE: 'HIDE',
	SHOW: 'SHOW',
};

const LoadingStore = React.createContext(initialState);

const LoadingStateProvider = ({ children }) => {
	const [state, dispatch] = useReducer((state, action) => {
		switch (action) {
			case spinnerAction.SHOW:
				return true;
			case spinnerAction.HIDE:
				return false;
			default:
				console.log(2312);
		}
	}, initialState);

	return (
		<LoadingStore.Provider value={{ state, dispatch }}>
			{children}
		</LoadingStore.Provider>
	);
};

export { LoadingStore, LoadingStateProvider, spinnerAction };
