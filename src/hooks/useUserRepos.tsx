import { useQuery } from '@apollo/client';
import { useUnit } from 'effector-react';

import { GetRepos } from '@/src/queries';
import { $pagination, setPagination, setRepos } from '@/src/store';

interface UseReposProps {
	perPage: number;
	limit: number;
}

export const useUserRepos = ({ limit, perPage }: UseReposProps) => {
	const { isUserInfo } = useUnit($pagination);
	const { error, loading } = useQuery(GetRepos, {
		variables: {
			first: limit,
			after: null,
		},
		skip: !isUserInfo,
		onCompleted: (newData) => {
			setRepos({
				data: {
					userRepos: {
						count: newData.viewer.repositories.totalCount,
						repos: newData.viewer.repositories.edges,
					},
				},
			});
			setPagination({ limit, perPage, loading, error: error?.message });
		},
	});
};
export default useUserRepos;
