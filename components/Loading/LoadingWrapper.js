import React from 'react';
import Loading from './Loading';

const LoadingWrapper = ({ isLoading = true, children }) => {
	if (isLoading) return <Loading />;
	return children;
};

export default LoadingWrapper;
