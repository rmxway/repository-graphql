import { useUnit } from 'effector-react';
import debounce from 'lodash.debounce';
import { useRef } from 'react';

import { Input } from '@/shared';
import { useSearch } from '@/src/hooks';
import {
	$after,
	$pagination,
	setAfter,
	setPagination,
	setSearchRepos,
} from '@/src/store';

export const Search = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const { page, limit, clearFetch, perPage, isUserInfo, search } =
		useUnit($pagination);
	const after = useUnit($after);

	useSearch({
		limit: Number(limit) || 100,
		after,
		perPage,
		query: search,
		skip: isUserInfo,
		clear: clearFetch,
	});

	const editField = () => {
		if (!inputRef.current?.value) {
			setSearchRepos({
				data: {
					count: 0,
					repos: [],
					lastCursor: '',
				},
				clear: true,
			});
		}

		if (inputRef.current) {
			setPagination({
				search: inputRef.current?.value,
				clearFetch: true,
				isUserInfo: !inputRef.current.value,
				page: !inputRef.current.value ? 1 : page,
			});
			setAfter('');
		}
	};

	const debounced = debounce(() => {
		editField();
	}, 500);

	const handleChange = () => {
		debounced();
	};

	const handleClear = () => {
		if (inputRef.current) {
			inputRef.current.value = '';
			editField();
		}
	};

	return (
		<Input
			ref={inputRef}
			id="search"
			type="text"
			defaultValue={search}
			placeholder="Search repositories"
			onChange={handleChange}
			isFilled={!!inputRef.current?.value}
			clear={handleClear}
		/>
	);
};
export default Search;
