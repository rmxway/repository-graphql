import { createEvent, createStore } from 'effector';

import { GetReposQuery, SearchReposQuery } from '@/src/gql/graphql';

interface Pagination {
	page: number;
	perPage: number;
	limit: number;
	cursors: string[];
	search: string;
	isUserInfo: boolean;
	loading: boolean;
	error: string;
}

interface ReposInitialState {
	searchRepos: {
		count: number;
		repos: SearchReposQuery['search']['edges'];
	};
	userRepos: {
		count: number;
		repos: GetReposQuery['viewer']['repositories']['edges'];
	};
}

const paginationInitialState: Pagination = {
	page: 1,
	perPage: 10,
	limit: 100,
	cursors: [],
	search: '',
	isUserInfo: true,
	loading: true,
	error: '',
};

export const $repos = createStore<Partial<ReposInitialState>>({});
export const $pagination = createStore(paginationInitialState);

export const setRepos = createEvent<Partial<ReposInitialState>>();
export const setPagination = createEvent<Partial<Pagination>>();

$repos.on(setRepos, (state, data) => ({
	...state,
	...data,
}));

$pagination.on(setPagination, (state, data) => ({
	...state,
	...data,
}));

$repos.watch(console.log);
$pagination.watch(console.log);
