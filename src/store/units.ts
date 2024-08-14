import { createEvent, createStore } from 'effector';

import { isDev } from '@/src/helpers';

import { Pagination, Repository, SearchRepoSate, UserRepoState } from '.';

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

export const $userRepo = createStore<Partial<UserRepoState>>({});
export const $searchRepos = createStore<Partial<SearchRepoSate>>({});
export const $repository = createStore<Partial<Repository>>({});
export const $pagination = createStore(paginationInitialState);
export const $after = createStore<string | undefined>('');

export const setUserRepo = createEvent<UserRepoState>({});

export const setSearchRepos = createEvent<{
	data: Partial<SearchRepoSate>;
	clear?: boolean;
}>();
export const setRepository = createEvent<Partial<Repository>>();
export const setPagination = createEvent<Partial<Pagination>>();
export const setAfter = createEvent<string>();
export const addSearchRepos = createEvent();

$userRepo.on(setUserRepo, (_, data) => data);

$searchRepos.on(setSearchRepos, (state, { data, clear }) => {	
	return clear
		? { ...data }
		: {
				...state,
				count: data.count || 0,
				repos: [...(state.repos || []), ...(data.repos || [])] || [],
				lastCursor: data.lastCursor || '',
			};
});

$repository.on(setRepository, (_, data) => data);

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
if (isDev) {
	$repository.watch((data) => console.log('repository: ', data));
	$pagination.watch(console.log);
	$after.watch((after) => console.log('After: ', after));
}
