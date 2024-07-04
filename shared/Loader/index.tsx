import { FC } from 'react';

import { LoaderWrapper } from './styled';

export const Loader: FC<{ isLoading: boolean }> = ({ isLoading }) =>
	isLoading && (
		<LoaderWrapper>
			<span />
		</LoaderWrapper>
	);
export default Loader;
