import { createEvent, createStore } from 'effector';

import { GetReposQuery } from '@/src/gql/graphql';

interface Pagination {
	page: number;
	perPage: number;
}

const paginationInitialState: Pagination = {
	page: 1,
	perPage: 4,
};

export const $repos = createStore({} as GetReposQuery);
export const $pagination = createStore(paginationInitialState);

export const setRepos = createEvent<GetReposQuery>();
export const setPerPage = createEvent<number>();

$repos.on(setRepos, (_, data) => data);
$pagination.on(setPerPage, (state, perPage) => ({
	...state,
	perPage,
}));
