import { graphql } from '@/src/gql';

export const SearchRepos = graphql(/* GraphQL */ `
	query SearchRepos($query: String!, $after: String) {
		search(type: REPOSITORY, first: 10, after: $after, query: $query) {
			repositoryCount
			nodes {
				... on Repository {
					name
					url
					updatedAt
					stargazerCount
				}
			}
		}
	}
`);
