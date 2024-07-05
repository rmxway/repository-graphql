import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Navigation } from '@/shared';
import { defaultTheme, GlobalStyles } from '@/src/theme';

import { Wrapper } from './styled';

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<Wrapper>
				<h1>Repository GraphQL</h1>
				{process.env.NODE_ENV !== 'production' && <Navigation />}
				<Outlet />
			</Wrapper>
		</ThemeProvider>
	);
}

export default App;
