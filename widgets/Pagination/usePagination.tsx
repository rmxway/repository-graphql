import { useUnit } from 'effector-react';
import debounce from 'lodash.debounce';
import { useCallback, useMemo } from 'react';

import { Button } from '@/shared';
import { $pagination } from '@/src/store';

import { PaginationProps } from '.';

export const usePagination = ({
	items,
	changePage,
	maxCount,
}: Omit<PaginationProps, 'isLoading'>) => {
	const { page, perPage } = useUnit($pagination);
	const totalPages = useMemo(
		() => Math.ceil(items / perPage),
		[items, perPage],
	);

	const countButtons = Math.ceil(
		totalPages >= maxCount ? maxCount : totalPages,
	);

	const debouncedChangePage = debounce((p: number) => {
		changePage(p);
	}, 400);

	const halfCountButtons = Math.round(maxCount / 2);

	const start: number =
		totalPages <= countButtons
			? 0
			: page - halfCountButtons < 0
				? 0
				: page - halfCountButtons;
	const end: number =
		totalPages <= countButtons
			? totalPages
			: page >= halfCountButtons + 1
				? maxCount + page - halfCountButtons
				: maxCount;

	const viewed = (): number => {
		if (totalPages !== page) {
			return page * perPage;
		}
		return items;
	};

	const renderButtons = useCallback(() => {
		const arrButtons: ReturnType<typeof Button>[] = Array.from({
			length: countButtons,
		});

		for (let i = start; i < end; i++) {
			const currentPage = i + 1;

			arrButtons[i] = (
				<Button
					key={i}
					data-key={i}
					$secondary={page === currentPage}
					$inactive={page === currentPage}
					onClick={() => debouncedChangePage(currentPage)}
				>
					{currentPage}
				</Button>
			);

			if (i === end) break;
		}

		return arrButtons;
	}, [countButtons, start, end, page, debouncedChangePage]);

	return { perPage, renderButtons, start, viewed };
};
export default usePagination;
