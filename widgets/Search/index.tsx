import { useQuery } from '@apollo/client';
import { ChangeEvent, useEffect, useRef } from 'react';

import { Input } from '@/shared';
import { debounceFunction } from '@/src/helpers';
import { SearchRepos } from '@/src/queries/search';

export const Search = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const { data, refetch } = useQuery(SearchRepos, {
		variables: {
			query: '',
		},
	});

	useEffect(() => {
		if (data) {
			// Test Data
			const { search } = data;
			console.log(search);
		}
	}, [data]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const searchText = e.target.value;
		debounceFunction(1000)(() => {
			void refetch({ query: searchText });
		});
	};

	return (
		<Input
			ref={inputRef}
			id="search"
			type="text"
			placeholder="Search repositories"
			onChange={handleChange}
		/>
	);
};
export default Search;
