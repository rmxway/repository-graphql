import { useUnit } from 'effector-react';

import { Loader } from '@/shared';
import { RepositoryCard } from '@/shared/RepositoryCard';
import { useUserRepos } from '@/src/hooks';
import { $pagination, $repos, setPagination } from '@/src/store';
import { Pagination, Search } from '@/widgets';

import { GridForRepos } from './styled';

export const MainPage = () => {
	useUserRepos({
		perPage: 4,
		limit: 100,
	});

	const { page, perPage, isUserInfo, loading, error } = useUnit($pagination);

	const repos = useUnit($repos);
	const { userRepos, searchRepos } = repos;

	const currentRepos =
		isUserInfo || !searchRepos?.repos ? userRepos : searchRepos;

	const handleChangePage = (page: number) => {
		setPagination({ page });
	};

	if (error) return <pre>{JSON.stringify(error, null, 4)}</pre>;

	return (
		<>
			<Search />
			{!error && page && (
				<>
					<GridForRepos $isLoading={loading}>
						{currentRepos?.repos
							?.slice((page - 1) * perPage, perPage * page)
							.map((edge, idx) => (
								<RepositoryCard key={idx} {...edge?.node} />
							))}
						<Loader isLoading={loading} />
						{currentRepos?.count === 0 && (
							<p>Repositories not found</p>
						)}
					</GridForRepos>

					<Pagination
						items={currentRepos?.count || 0}
						changePage={handleChangePage}
					/>
				</>
			)}
		</>
	);
};
export default MainPage;
