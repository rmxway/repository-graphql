import { useUnit } from 'effector-react';

import { Loader } from '@/shared';
import { RepositoryCard } from '@/shared/RepositoryCard';
import useRepos from '@/src/hooks/useRepos';
import { $pagination, setPage } from '@/src/store';
import { Pagination, Search } from '@/widgets';

import { GridForRepos } from './styled';

export const MainPage = () => {
	const { error, loading, repos } = useRepos({ limit: 50, perPage: 4 });
	const { viewer } = repos;
	const { page, perPage } = useUnit($pagination);

	const handleChangePage = (page: number) => {
		setPage(page);
	};

	if (error) return <pre>{JSON.stringify(error, null, 4)}</pre>;

	return (
		<>
			<Search />
			{loading && <Loader isLoading />}
			{!error && !loading && viewer && (
				<>
					<div>User: {viewer?.login}</div>
					<div>Name: {viewer?.name}</div>
					<GridForRepos>
						{viewer?.repositories?.edges
							?.slice((page - 1) * perPage, perPage * page)
							.map((edge, idx) => (
								<RepositoryCard key={idx} {...edge?.node} />
							))}
					</GridForRepos>
					<Pagination
						items={viewer?.repositories?.totalCount || 0}
						itemsPerPage={perPage}
						page={page}
						changePage={handleChangePage}
					/>
				</>
			)}
		</>
	);
};
export default MainPage;
