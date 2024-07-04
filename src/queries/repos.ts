import { graphql } from '@/src/gql';

export const Repos = graphql(/* GraphQL */ `
	query GetRepos {
		viewer {
			login
			name
			repositories(
				first: 10
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
