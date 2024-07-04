import 'graphiql/graphiql.min.css';

import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';

import { graphqlURL, headers } from '@/src/main';

export const GraphiQLComponent = () => {
	const fetcher = createGraphiQLFetcher({
		url: graphqlURL,
		headers,
	});
	return <GraphiQL fetcher={fetcher} />;
};
