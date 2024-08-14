import { NavLink } from 'react-router-dom';

import { Button, Icon, Loader } from '@/shared';
import { Grid } from '@/shared/Layout';
import { TopBlock } from '@/shared/RepositoryCard/styled';
import { hostPath } from '@/src/helpers';
import { useRepository } from '@/src/hooks/useRepository';

import { Lang, RepositoryWrapper } from './styled';

export const RepositoryPage = () => {
	const { error, loading, name, repository } = useRepository();

	return (
		<>
			<NavLink to={`${hostPath}/`}>
				<Button>Back</Button>
			</NavLink>
			<br />
			<br />
			{(error || !repository) && <div>{error?.message}</div>}
			{repository && !loading && !error && (
				<RepositoryWrapper
					$direction="column"
					$gap={30}
					$templateColumns="150px 1fr"
					$align="center"
				>
					{loading && <Loader isLoading={loading} />}
					<a
						href={repository.owner.url}
						target="_blank"
						title={`Move to the ${repository.owner.login}'s account`}
						rel="noreferrer"
					>
						<Grid
							$justify="center"
							$align="center"
							$direction="row"
							$gap={10}
						>
							<img
								src={repository.owner.avatarUrl}
								alt={repository.owner.login}
							/>
							<div>{repository.owner.login}</div>
						</Grid>
					</a>
					<Grid $gap={10}>
						<TopBlock
							to={repository.url}
							target="_blank"
							title={`Move to ${name}`}
						>
							<span>{name}</span>
							<Grid $direction="column" $gap={4} $align="center">
								<Icon size={14} icon="star" color="warn" />{' '}
								<span>{repository.stargazerCount}</span>
							</Grid>
						</TopBlock>
						{repository.description && (
							<p>{repository.description}</p>
						)}
						<ul>
							{repository.languages?.nodes?.map((lang) => (
								<Lang
									key={lang?.name}
									$color={String(lang?.color)}
								>
									{lang?.name}
								</Lang>
							))}
						</ul>
						<i>
							last updated:{' '}
							{new Date(repository.updatedAt).toLocaleDateString(
								'ru-RU',
							)}
						</i>
					</Grid>
				</RepositoryWrapper>
			)}
		</>
	);
};
export default RepositoryPage;
