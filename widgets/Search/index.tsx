import { useUnit } from 'effector-react';
import { useRef } from 'react';

import { Input } from '@/shared';
import { debounceFunction } from '@/src/helpers';
import { useSearch } from '@/src/hooks';
import { $after, $pagination, setAfter, setPagination } from '@/src/store';

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
		if (inputRef.current) {
			setPagination({
				search: inputRef.current?.value,
				clearFetch: true,
				isUserInfo: !inputRef.current?.value,
				page: !inputRef.current?.value ? 1 : page,
			});
			setAfter('');
		}
	};

	const debounced = debounceFunction(() => {
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
			placeholder="Search repositories"
			onChange={handleChange}
			isFilled={!!inputRef.current?.value}
			clear={handleClear}
		/>
	);
};
export default Search;
