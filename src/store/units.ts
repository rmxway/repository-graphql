import { createEvent, createStore } from 'effector';

import { GetReposQuery, SearchReposQuery } from '@/src/gql/graphql';

interface Pagination {
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

interface ReposInitialState {
	searchRepos: {
		count: number;
		repos: SearchReposQuery['search']['edges'];
		lastCursor?: string;
	};
	userRepos: {
		count: number;
		repos: GetReposQuery['viewer']['repositories']['edges'];
		lastCursor?: string;
	};
}

const paginationInitialState: Pagination = {
	page: 1,
	perPage: 10,
	pageByNewFetch: 5,
	clearFetch: true,
	limit: 100,
	search: '',
	isUserInfo: true,
	loading: true,
	error: '',
};

export const $repos = createStore<Partial<ReposInitialState>>({});
export const $pagination = createStore(paginationInitialState);
export const $after = createStore<string | undefined>('');

export const $searchRepos = createStore<
	ReposInitialState['searchRepos']['repos']
>([]);

export const setRepos = createEvent<{
	data: Partial<ReposInitialState>;
	clear?: boolean;
}>();
export const addSearchRepos = createEvent();
export const setPagination = createEvent<Partial<Pagination>>();
export const setAfter = createEvent<string>();

$repos.on(setRepos, (state, data) => ({
	...state,
	...data,
}));

$repos.on(setRepos, (state, { data, clear }) => {
	const { searchRepos } = data;

	return clear
		? { ...state, ...data }
		: {
				...state,
				...data,
				searchRepos: {
					count: searchRepos?.count || 0,
					repos:
						[
							...(state.searchRepos?.repos || []),
							...(searchRepos?.repos || []),
						] || [],
					lastCursor: searchRepos?.lastCursor || '',
				},
			};
});

$pagination.on(setPagination, (state, data) => {
	const cond = (data.page ?? state.page) > state.pageByNewFetch;

	return {
		...state,
		...data,
		pageByNewFetch:
			data.pageByNewFetch ||
			(cond
				? state.pageByNewFetch + state.perPage
				: state.pageByNewFetch),
	};
});

$after.on(setAfter, (_, after) => after);

/* Watches */
$repos.watch((data) => console.log(data.searchRepos));
$pagination.watch(console.log);
$after.watch((after) => console.log('After: ', after));
