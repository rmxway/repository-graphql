import '@/src/assets/fonts/icofont/icofont.scss';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
	createBrowserRouter,
	RouteObject,
	RouterProvider,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { MainPage } from '@/pages/main';
import { RepositoryPage } from '@/pages/repository';
import App from '@/src/App';
import { defaultTheme, GlobalStyles } from '@/src/theme';

import { hostPath } from './helpers';

export const graphqlURL = 'https://api.github.com/graphql';

export const headers = {
	['Authorization']: 'Bearer ' + process.env.TOKEN,
	['Content-type']: 'text/html',
};

const client = new ApolloClient({
	uri: graphqlURL,
	cache: new InMemoryCache(),
	headers,
});

const browserRoutes: RouteObject[] = [
	{
		path: hostPath,
		element: <App />,
		children: [
			{
				path: hostPath,
				element: <MainPage />,
			},
			{
				path: `${hostPath}repository`,
				element: <RepositoryPage />,
			},
		],
	},
];

const router = createBrowserRouter(browserRoutes);

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<StrictMode>
		<ApolloProvider client={client}>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				<RouterProvider router={router} />
			</ThemeProvider>
		</ApolloProvider>
	</StrictMode>,
);
