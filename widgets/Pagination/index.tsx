import { FC } from 'react';

import { Button } from '@/shared';
import { Grid } from '@/shared/Layout';

interface PaginationProps {
	page: number;
	items: number;
	itemsPerPage: number;
	changePage: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
	items,
	itemsPerPage,
	page,
	changePage,
}) => {
	const pages = Math.ceil(items / itemsPerPage);
	const maxButtonsCount = 4;
	const countButtons = pages >= maxButtonsCount ? maxButtonsCount : pages;

	const renderButtons = () => {
		const arrButtons: ReturnType<typeof Button>[] = Array.from({
			length: countButtons,
		});

		for (let i = 0; i < pages; i++) {
			const currentPage = i + 1;
			arrButtons[i] = (
				<Button
					key={i}
					$secondary={page === currentPage}
					onClick={() => changePage(currentPage)}
				>
					{currentPage}
				</Button>
			);
		}

		return arrButtons;
	};

	/* const start: number = page - 3 < 0 ? 0 : page - 3;
	const end: number = page <= 2 ? countButtons : page + 1; */

	return items > itemsPerPage && (
		<>
			<Grid $gap={4} $direction="column" $mb={10}>
				{...renderButtons()}
			</Grid>
		</>
	);
};
export default Pagination;
