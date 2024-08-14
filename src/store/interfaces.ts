import { GetReposQuery, SearchReposQuery } from '@/src/gql/graphql';

export interface Pagination {
	page: number;
	pageByNewFetch: number;
	perPage: number;
	clearFetch: boolean;
	limit: number;
	search: string;
	isUserInfo: boolean;
	loading: boolean;
	error: string;
}

export interface UserRepoState {
	count: number;
	repos: GetReposQuery['viewer']['repositories']['edges'];
	lastCursor?: string;
}

export interface SearchRepoSate {
	count: number;
	repos: SearchReposQuery['search']['edges'];
	lastCursor?: string;
}

export interface Repository {
	name: string;
	description: string;
	url: string;
	stargazerCount: number;
	updatedAt: string;
	languages: string[];
	owner: {
		login: string;
		avatarUrl: string;
		url: string;
	};
}
