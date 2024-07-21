import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

import { isDev } from './helpers';
import { Wrapper } from './styled';

const Navigation = lazy(() => import('@/shared/Navigation'));

function App() {
	return (
		<Wrapper>
			<h1>Repository GraphQL</h1>
			{isDev ? <Navigation /> : null}
			<Outlet />
		</Wrapper>
	);
}

export default App;
