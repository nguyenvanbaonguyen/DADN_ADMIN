import React from 'react';

const Appear = ({ condition, children }) => {
	if (!condition) return null;
	return <>{children}</>;
};

export default Appear;
