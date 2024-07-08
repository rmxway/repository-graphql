import { useUnit } from 'effector-react';
import { FC, useMemo } from 'react';

import { Button } from '@/shared';
import { Grid } from '@/shared/Layout';
import { $pagination } from '@/src/store';

interface PaginationProps {
	items: number;
	changePage: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({ items, changePage }) => {
	const { page, perPage } = useUnit($pagination);
	const maxButtonsCount = 10;
	const totalPages = useMemo(
		() => Math.ceil(items / perPage),
		[items, perPage],
	);

	const countButtons = Math.ceil(
		totalPages >= maxButtonsCount ? maxButtonsCount : totalPages,
	);

	const start: number =
		totalPages <= countButtons ? 0 : page - 5 < 0 ? 0 : page - 5; // 0
	const end: number =
		totalPages <= countButtons
			? totalPages
			: page >= 6
				? maxButtonsCount + page - 5
				: maxButtonsCount;

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
