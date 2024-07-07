import { graphql } from '@/src/gql';

export const GetRepos = graphql(/* GraphQL */ `
	query GetRepos($limit: Int!, $after: String) {
		viewer {
			login
			name
			repositories(
				first: $limit				
				after: $after
				ownerAffiliations:OWNER
				visibility: PUBLIC
				orderBy: { field: UPDATED_AT, direction: DESC }
			) {
				pageInfo {
					startCursor
					endCursor
					hasNextPage
					hasPreviousPage
				}
				totalCount
				edges {
					cursor
					node {
						...RepositoryOnMainPage
					}
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
		stargazerCount
	}
`);
