import { graphql } from '@/src/gql';

export const SearchRepos = graphql(/* GraphQL */ `
	query SearchRepos($first: Int = 10, $after: String, $query: String!) {
		search(type: REPOSITORY, first: $first, after: $after, query: $query) {
			repositoryCount
			edges {
				cursor
				node {
					... on Repository {
						name
						url
						updatedAt
						stargazerCount
					}
				}
			}
		}
	}
`);
