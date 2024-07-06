import { Outlet } from 'react-router-dom';

import { Navigation } from '@/shared';

import { Wrapper } from './styled';

function App() {
	return (
		<Wrapper>
			<h1>Repository GraphQL</h1>
			{process.env.NODE_ENV !== 'production' && <Navigation />}
			<Outlet />
		</Wrapper>
	);
}

export default App;
