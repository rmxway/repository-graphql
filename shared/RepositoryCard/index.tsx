import { FC } from 'react';

import { Icon } from '@/shared';
import { Flex, Grid } from '@/shared/Layout';
import { FragmentType, useFragment } from '@/src/gql/fragment-masking';
import { hostPath } from '@/src/helpers';
import { RepositoryOnMainPage } from '@/src/queries/repos';

import { Image, RepositoryCardWrapper, TopBlock } from './styled';

export const RepositoryCard: FC<FragmentType<typeof RepositoryOnMainPage>> = (
	props,
) => {
	const { name, updatedAt, url, stargazerCount, owner } = useFragment(
		RepositoryOnMainPage,
		props,
	);

	return (
		<RepositoryCardWrapper key={String(updatedAt)}>
			<TopBlock
				to={`${hostPath}/repository?owner=${owner.login}&name=${name}`}
			>
				<span>{name}</span>
				<Grid $direction="column" $gap={4} $align="center">
					<Icon size={14} icon="star" color="warn" />{' '}
					<span>{stargazerCount}</span>
				</Grid>
			</TopBlock>
			<Flex $wrap="nowrap" $align="center">
				<Image loading="lazy" src={owner.avatarUrl} alt={owner.login} />{' '}
				<Grid $gap={4}>
					{owner && (
						<div>
							owner:{' '}
							<a
								href={String(owner.url)}
								target="_blank"
								rel="noreferrer"
							>
								<span>{String(owner.login)}</span>
							</a>
						</div>
					)}
					{url && (
						<a href={String(url)} target="_blank" rel="noreferrer">
							<span>{String(url)}</span>
						</a>
					)}
					{updatedAt && (
						<div>
							Last update:{' '}
							{new Date(updatedAt).toLocaleDateString('ru-RU')}
						</div>
					)}
				</Grid>
			</Flex>
		</RepositoryCardWrapper>
	);
};

export default RepositoryCard;
