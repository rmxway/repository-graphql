import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { NavigationWrapper } from './styled';

export const Navigation: FC = () => (
	<NavigationWrapper>
		<NavLink to={'/'} end>
			Main
		</NavLink>
		<NavLink to={'/__graphql'} target="_blank">
			GraphQL
		</NavLink>
	</NavigationWrapper>
);

export default Navigation;
