import { useUnit } from 'effector-react';

import { Loader } from '@/shared';
import { RepositoryCard } from '@/shared/RepositoryCard';
import { useUserRepos } from '@/src/hooks';
import { $pagination, $repos, setAfter, setPagination } from '@/src/store';
import { Pagination, Search } from '@/widgets';

import { GridForRepos } from './styled';

export const MainPage = () => {
	useUserRepos({
		perPage: 10,
		limit: 100,
	});

	const { page, perPage, pageByNewFetch, isUserInfo, loading, error } =
		useUnit($pagination);

	const repos = useUnit($repos);
	const { userRepos, searchRepos } = repos;

	const currentRepos =
		isUserInfo || (loading && !searchRepos?.count)
			? userRepos
			: searchRepos;

	const handleChangePage = (page: number) => {
		if (page > pageByNewFetch) setAfter(String(currentRepos?.lastCursor));
		setPagination({
			page,
			clearFetch: false,
		});
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
						maxCount={10}
					/>
				</>
			)}
		</>
	);
};
export default MainPage;
