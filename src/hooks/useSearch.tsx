import { useQuery } from '@apollo/client';

import { SearchRepos } from '@/src/queries';
import { setPagination, setRepos } from '@/src/store';

interface UseSearchProps {
	limit: number;
	after?: string;
	query: string;
	skip: boolean;
}

export const useSearch = ({ limit, after, query, skip }: UseSearchProps) => {
	const { error, loading } = useQuery(SearchRepos, {
		variables: {
			first: limit,
			query,
			after,
		},
		skip,
		onCompleted: (newData) => {
			const { search } = newData;

			if (search) {
				setRepos({
					searchRepos: {
						count: search?.repositoryCount,
						repos: search?.edges,
					},
				});
				setPagination({
					loading,
					error: error?.message,
				});
			}
		},
	});
};
export default useSearch;
