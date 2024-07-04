import './base.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainPage } from '@/pages/main';
import { RepositoryPage } from '@/pages/repository';
import App from '@/src/App';
import { GraphiQLComponent } from '@/src/GraphiQL';

export const mainPath = '/';
export const graphqlURL = 'https://api.github.com/graphql';
export const headers = {
	Authorization: 'Bearer ' + process.env.TOKEN,
};

const client = new ApolloClient({
	uri: graphqlURL,
	cache: new InMemoryCache(),
	headers,
});

const router = createBrowserRouter([
	{
		path: mainPath,
		element: <App />,
		children: [
			{
				path: mainPath,
				element: <MainPage />,
			},
			{
				path: `${mainPath}/repository`,
				element: <RepositoryPage />,
			},
		],
	},
	{
		path: `${mainPath}/__graphql`,
		element: <GraphiQLComponent />,
	},
]);

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<StrictMode>
		<ApolloProvider client={client}>
			<RouterProvider router={router} />
		</ApolloProvider>
	</StrictMode>,
);
