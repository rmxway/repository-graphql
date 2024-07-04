import { useQuery } from '@apollo/client';

import { RepositoryCard } from '@/shared/RepositoryCard';
import { GetReposQuery } from '@/src/gql/graphql';
import { Repos } from '@/src/queries/repos';

import { GridForRepos } from './styled';

export const MainPage = () => {
	const { error, data } = useQuery<GetReposQuery>(Repos);

	if (error) return <pre>{JSON.stringify(error, null, 4)}</pre>;

	return (
		<>
			<div>User: {data?.viewer.login}</div>
			<div>Name: {data?.viewer.name}</div>
			<input type="text" />
			<GridForRepos>
				{data?.viewer?.repositories?.nodes?.map((repo, idx) => (
					<RepositoryCard key={idx} {...repo} />
				))}
			</GridForRepos>
		</>
	);
};
export default MainPage;
