import { useUnit } from 'effector-react';
import { useRef } from 'react';

import { Input } from '@/shared';
import { debounceFunction } from '@/src/helpers';
import { useSearch } from '@/src/hooks';
import { $pagination, setPagination } from '@/src/store';

export const Search = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const { limit, isUserInfo, search } = useUnit($pagination);

	useSearch({
		limit: Number(limit) || 100,
		query: search,
		skip: isUserInfo,
	});

	const debounced = debounceFunction(() => {
		setPagination({
			search: inputRef.current?.value,
			loading: true,
			isUserInfo: inputRef.current?.value.length === 0,
		});
	}, 500);

	const handleChange = () => {
		debounced();
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
