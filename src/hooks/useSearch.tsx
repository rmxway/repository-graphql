import { useQuery } from '@apollo/client';
import { useEffect } from 'react';

import { SearchRepos } from '@/src/queries';
import { setPagination, setSearchRepos } from '@/src/store';

interface UseSearchProps {
	limit: number;
	perPage: number;
	skip: boolean;
	query: string;
	after?: string;
	clear?: boolean;
}

export const useSearch = ({
	limit,
	perPage,
	query,
	skip,
	after,
	clear,
}: UseSearchProps) => {
	const { error, loading } = useQuery(SearchRepos, {
		variables: {
			first: limit,
			query,
			after,
		},
		skip,
		onCompleted: (newData) => {
			const { search } = newData;

			if (search && search.edges) {
				setSearchRepos({
					data: {
						count: search?.repositoryCount,
						repos: search?.edges,
						lastCursor:
							(search.repositoryCount > limit &&
								String(search?.edges[limit - 1]?.cursor)) ||
							'',
					},
					clear,
				});

				clear &&
					setPagination({
						page: 1,
						pageByNewFetch: Math.round(perPage / 2),
					});
			}
		},
	});

	useEffect(() => {
		setPagination({
			pageByNewFetch: Math.round(perPage / 2),
		});
	}, [perPage, query]);

	useEffect(() => {
		setPagination({
			loading,
			error: error?.message,
		});
	}, [error?.message, loading]);
};

export default useSearch;
