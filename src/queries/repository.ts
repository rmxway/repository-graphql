import { graphql } from '@/src/gql';

export const GetRepository = graphql(/* GraphQL */ `
	query GetRepository($owner: String!, $repository: String!) {
		repository(owner: $owner, name: $repository) {
			name
			description
			url
			stargazerCount
			updatedAt
			languages(first: 10) {
				nodes {
					name
					color
				}
			}
			owner {
				login
				avatarUrl
				url
			}
		}
	}
`);
