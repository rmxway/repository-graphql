import { useQuery } from '@apollo/client';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';

import { GetReposQuery } from '@/src/gql/graphql';
import { Repos } from '@/src/queries/repos';
import { $repos, setPerPage, setRepos } from '@/src/store';

export const useRepos = (perPage: number) => {
	const { error, loading, data } = useQuery<GetReposQuery>(Repos, {
		variables: {
			perPage,
		},
	});
	const repos = useUnit($repos);

	useEffect(() => {
		if (data) {
			setRepos(data);
			setPerPage(perPage);
		}
	}, [data, perPage]);

	return { error, loading, repos };
};
export default useRepos;
