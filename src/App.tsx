import { Outlet } from 'react-router-dom';

import { Navigation } from '@/shared';

import { isDev } from './helpers';
import { Wrapper } from './styled';

function App() {
	return (
		<Wrapper>
			<h1>Search Repositories via GraphQL</h1>
			<br />
			{isDev && <Navigation />}
			<Outlet />
		</Wrapper>
	);
}

export default App;
