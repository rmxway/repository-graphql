import { graphql } from '@/src/gql';

export const Repos = graphql(/* GraphQL */ `
	query GetRepos($perPage: Int!) {
		viewer {
			login
			name
			repositories(
				first: $perPage
				orderBy: { field: UPDATED_AT, direction: DESC }
			) {
				pageInfo {
					startCursor
					endCursor
					hasNextPage
					hasPreviousPage
				}
				totalCount
				nodes {
					...RepositoryOnMainPage
				}
			}
		}
	}
`);

export const RepositoryOnMainPage = graphql(`
	fragment RepositoryOnMainPage on Repository {
		name
		url
		updatedAt
	}
`);
