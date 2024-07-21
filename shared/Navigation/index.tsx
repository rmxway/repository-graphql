import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { hostPath } from '@/src/helpers';

import { NavigationWrapper } from './styled';

export const Navigation: FC = () => (
	<NavigationWrapper>
		<NavLink to={hostPath} end>
			Main
		</NavLink>
		<NavLink to={`${hostPath}__graphql`} end target="_blank">
			GraphQL
		</NavLink>
	</NavigationWrapper>
);

export default Navigation;
