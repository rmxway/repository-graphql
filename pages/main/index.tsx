import { useUnit } from 'effector-react';

import { Input, Loader } from '@/shared';
import { RepositoryCard } from '@/shared/RepositoryCard';
import useRepos from '@/src/hooks/useRepos';
import { $pagination } from '@/src/store';
import { Pagination } from '@/widgets';

import { GridForRepos } from './styled';

export const MainPage = () => {
	const { error, loading, repos } = useRepos(4);
	const { viewer } = repos;
	const { page, perPage } = useUnit($pagination);

	if (error) return <pre>{JSON.stringify(error, null, 4)}</pre>;

	return (
		<>
			<Input id="search" type="text" placeholder="Search repositories" />
			{loading && <Loader isLoading />}
			{!error && !loading && viewer && (
				<>
					<div>User: {viewer?.login}</div>
					<div>Name: {viewer?.name}</div>
					<GridForRepos>
						{viewer?.repositories?.nodes?.map((repo, idx) => (
							<RepositoryCard key={idx} {...repo} />
						))}
					</GridForRepos>
					<Pagination
						items={viewer?.repositories?.totalCount || 0}
						itemsPerPage={perPage}
						page={page}
						changePage={console.log}
					/>
				</>
			)}
		</>
	);
};
export default MainPage;
