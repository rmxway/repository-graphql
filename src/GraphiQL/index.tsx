import 'graphiql/graphiql.min.css';

import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { lazy } from 'react';

import { isDev } from '@/src/helpers';
import { graphqlURL, headers } from '@/src/main';

const GraphiQL = isDev ? lazy(() => import('graphiql')) : null;

export const GraphiQLComponent = () => {
	const fetcher = createGraphiQLFetcher({
		url: graphqlURL,
		headers,
	});
	return isDev && GraphiQL && <GraphiQL fetcher={fetcher} />;
};
