import { useUnit } from 'effector-react';
import { FC, useMemo } from 'react';

import { Button } from '@/shared';
import { Grid } from '@/shared/Layout';
import { $pagination } from '@/src/store';

interface PaginationProps {
	items: number;
	changePage: (page: number) => void;
	maxCount: number;
}

/**
 * @param items - {number} Number of items
 * @param changePage - {function} (page:number) => void - Number of next page
 * @param {Number} maxCount - Max number of buttons [1, 2, 3, 4]
 * @example <Pagination items={100} changePage={(page) => fn(page)} maxCount={5} />
 */

export const Pagination: FC<PaginationProps> = ({
	items,
	changePage,
	maxCount,
}) => {
	const { page, perPage } = useUnit($pagination);
	const totalPages = useMemo(
		() => Math.ceil(items / perPage),
		[items, perPage],
	);

	const countButtons = Math.ceil(
		totalPages >= maxCount ? maxCount : totalPages,
	);

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

	const renderButtons = () => {
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
					onClick={() => changePage(currentPage)}
				>
					{currentPage}
				</Button>
			);

			if (i === end) break;
		}

		return arrButtons;
	};

	return (
		items > perPage && (
			<>
				<Grid $gap={4} $direction="column" $mb={10}>
					<Button
						$dark
						disabled={start < 1}
						onClick={() => changePage(1)}
					>
						To Start
					</Button>
					{...renderButtons()}
				</Grid>
			</>
		)
	);
};
export default Pagination;
