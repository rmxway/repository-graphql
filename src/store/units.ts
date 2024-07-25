import { createEvent, createStore } from 'effector';

import { isDev } from '@/src/helpers';

import { Pagination, ReposInitialState, Repository } from '.';

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
export const $repository = createStore<Partial<Repository>>({});
export const $pagination = createStore(paginationInitialState);
export const $after = createStore<string | undefined>('');
export const $searchRepos = createStore<
	ReposInitialState['searchRepos']['repos']
>([]);

export const setRepos = createEvent<{
	data: Partial<ReposInitialState>;
	clear?: boolean;
}>();
export const setRepository = createEvent<Partial<Repository>>();
export const setPagination = createEvent<Partial<Pagination>>();
export const setAfter = createEvent<string>();
export const addSearchRepos = createEvent();

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
	$repos.watch((data) => console.log(data.searchRepos));
	$repository.watch((data) => console.log('repository: ', data));
	$pagination.watch(console.log);
	$after.watch((after) => console.log('After: ', after));
}
