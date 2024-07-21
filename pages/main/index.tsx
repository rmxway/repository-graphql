import { useUnit } from 'effector-react';
import { lazy } from 'react';

import { Loader } from '@/shared';
import { RepositoryCard } from '@/shared/RepositoryCard';
import { SkeletonRepositoryCard } from '@/shared/RepositoryCard/SkeletonRepositoryCard';
import { useUserRepos } from '@/src/hooks';
import { $pagination, $repos, setAfter, setPagination } from '@/src/store';

import { GridForRepos } from './styled';

const Search = lazy(() => import('@/widgets/Search'));
const Pagination = lazy(() => import('@/widgets/Pagination'));

const skeletonRepos = new Array(10).fill({ node: null });

export const MainPage = () => {
	useUserRepos({
		perPage: 10,
		limit: 100,
	});

	const {
		page,
		perPage,
		pageByNewFetch,
		isUserInfo,
		loading,
		error,
		clearFetch,
	} = useUnit($pagination);

	const repos = useUnit($repos);
	const { userRepos, searchRepos } = repos;

	// todo: если ничего не найдено и посимвольно вводить текст, прыгает userRepos
	const currentRepos =
		isUserInfo || (loading && !searchRepos?.count)
			? userRepos
			: searchRepos;

	const currentShowRepos = currentRepos?.repos?.slice(
		(page - 1) * perPage,
		perPage * page,
	);

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
					<GridForRepos $isLoading={loading && clearFetch}>
						{currentRepos?.count !== 0 &&
							currentShowRepos?.length === 0 &&
							skeletonRepos.map((_, idx) => (
								<SkeletonRepositoryCard key={idx} />
							))}
						{currentShowRepos?.map((edge, idx) => (
							<RepositoryCard key={idx} {...edge?.node} />
						))}
						<Loader isLoading={loading && clearFetch} />
						{!loading && currentRepos?.count === 0 && (
							<p>Repositories not found</p>
						)}
					</GridForRepos>

					<Pagination
						isLoading={loading && clearFetch}
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
