import { Outlet } from 'react-router-dom';

import { Wrapper } from './styled';

function App() {
	return (
		<Wrapper>
			<h1>Search Repositories via GraphQL</h1>
			<br />
			<Outlet />
		</Wrapper>
	);
}

export default App;
