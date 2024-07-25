import { useQuery } from '@apollo/client';
import { useSearchParams } from 'react-router-dom';

import { GetRepository } from '@/src/queries/repository';

export const useRepository = () => {
	const [params] = useSearchParams();
	const owner = params.get('owner') || '';
	const name = params.get('name') || '';
	const { loading, error, data } = useQuery(GetRepository, {
		variables: {
			owner,
			repository: name,
		},
	});

	const repository = data?.repository;

	return { loading, error, repository, name };
};
