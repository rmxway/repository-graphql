import { FC } from 'react';

import { LoaderWrapper } from './styled';

export const Loader: FC<{ isLoading?: boolean }> = ({ isLoading }) => {
	return (
		isLoading && (
			<LoaderWrapper>
				<span />
				<span />
				<span />
				<span />
			</LoaderWrapper>
		)
	);
};

export default Loader;
