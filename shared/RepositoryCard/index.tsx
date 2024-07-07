import { FC } from 'react';

import { Icon } from '@/shared';
import { Grid } from '@/shared/Layout';
import { FragmentType, useFragment } from '@/src/gql/fragment-masking';
import { RepositoryOnMainPage } from '@/src/queries/repos';

import { RepositoryCardWrapper, TopBlock } from './styled';

export const RepositoryCard: FC<FragmentType<typeof RepositoryOnMainPage>> = (
	props,
) => {
	const { name, updatedAt, url, stargazerCount } = useFragment(
		RepositoryOnMainPage,
		props,
	);

	return (
		<RepositoryCardWrapper key={String(updatedAt)}>
			<>
				<TopBlock>
					<span>{name}</span>
					<Grid $direction="column" $gap={4} $align="center">
						<Icon size={14} icon="star" color="warn" />{' '}
						<span>{stargazerCount}</span>
					</Grid>
				</TopBlock>
				{url && (
					<a href={String(url)} target="_blank" rel="noreferrer">
						{String(url)}
					</a>
				)}
				{typeof updatedAt === 'string' && (
					<div>
						Last update:{' '}
						{new Date(updatedAt).toLocaleDateString('ru-RU')}
					</div>
				)}
			</>
		</RepositoryCardWrapper>
	);
};

export default RepositoryCard;
