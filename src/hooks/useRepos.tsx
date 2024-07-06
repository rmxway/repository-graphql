import { useQuery } from '@apollo/client';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';

import { GetReposQuery, GetReposQueryVariables } from '@/src/gql/graphql';
import { Repos } from '@/src/queries/repos';
import { $repos, setCursors, setPerPage, setRepos } from '@/src/store';

interface UseReposProps {
	limit: number;
	perPage: number;
}

export const useRepos = ({ limit, perPage }: UseReposProps) => {
	const { error, loading, data, refetch } = useQuery<
		GetReposQuery,
		GetReposQueryVariables
	>(Repos, {
		variables: {
			limit,
			after: null,
		},
	});
	const repos = useUnit($repos);

	useEffect(() => {
		if (data && data.viewer.repositories.edges) {
			const cursors = data.viewer.repositories.edges
				.filter((_, idx) => idx % perPage === 0)
				.map((edge) => edge?.cursor || '');
			setRepos(data);
			setPerPage(perPage);
			setCursors(cursors);
		}
	}, [data, perPage]);

	return { error, loading, repos, refetch };
};
export default useRepos;
