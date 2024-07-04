import { FC } from 'react';

import { FragmentType, useFragment } from '@/src/gql/fragment-masking';
import { RepositoryOnMainPage } from '@/src/queries/repos';

import { RepositoryCardWrapper } from './styled';

export const RepositoryCard: FC<FragmentType<typeof RepositoryOnMainPage>> = (
	props,
) => {
	const { name, updatedAt, url } = useFragment(RepositoryOnMainPage, props);

	return (
		<RepositoryCardWrapper key={String(updatedAt)}>
			<>
				<span>{name}</span>
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
