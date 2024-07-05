import { useQuery } from '@apollo/client';

import { Input, Loader } from '@/shared';
import { RepositoryCard } from '@/shared/RepositoryCard';
import { GetReposQuery } from '@/src/gql/graphql';
import { Repos } from '@/src/queries/repos';
import { Pagination } from '@/widgets';

import { GridForRepos } from './styled';

export const MainPage = () => {
	const { error, loading, data } = useQuery<GetReposQuery>(Repos);

	if (error) return <pre>{JSON.stringify(error, null, 4)}</pre>;

	return (
		<>
			<Input id="search" type="text" placeholder="Search repositories" />
			{!error && !loading && data?.viewer ? (
				<>
					<div>User: {data?.viewer.login}</div>
					<div>Name: {data?.viewer.name}</div>
					<GridForRepos>
						{data?.viewer?.repositories?.nodes?.map((repo, idx) => (
							<RepositoryCard key={idx} {...repo} />
						))}
					</GridForRepos>
					<Pagination items={10} itemsPerPage={2} page={1} />
				</>
			) : (
				<Loader isLoading />
			)}
		</>
	);
};
export default MainPage;
