import { createEvent, createStore } from 'effector';

import { GetReposQuery } from '@/src/gql/graphql';

interface Pagination {
	page: number;
	perPage: number;
	cursors: string[];
}

const paginationInitialState: Pagination = {
	page: 1,
	perPage: 2,
	cursors: [],
};

export const $repos = createStore({} as GetReposQuery);
export const $pagination = createStore(paginationInitialState);

export const setRepos = createEvent<GetReposQuery>();
export const setPerPage = createEvent<number>();
export const setPage = createEvent<number>();
export const setCursors = createEvent<string[]>();

$repos.on(setRepos, (_, data) => data);

$pagination.on(setPerPage, (state, perPage) => ({
	...state,
	perPage,
}));

$pagination.on(setPage, (state, page) => ({
	...state,
	page,
}));

$pagination.on(setCursors, (state, cursors) => ({
	...state,
	cursors,
}));
