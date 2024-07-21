import { FC } from 'react';

import { Button } from '@/shared';
import { Grid } from '@/shared/Layout';

import { ButtonsBlock, Info, WrapperPagination } from './styled';
import { usePagination } from './usePagination';

export interface PaginationProps {
	isLoading?: boolean;
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
	isLoading,
	items,
	changePage,
	maxCount,
}) => {
	const { renderButtons, start, perPage, viewed } = usePagination({
		items,
		changePage,
		maxCount,
	});

	return (
		items > perPage && (
			<WrapperPagination $isLoading={isLoading}>
				<Grid $justify="space-between" $direction="row" $align="center">
					<ButtonsBlock $gap={4} $direction="column">
						{start > 0 && (
							<Button
								$dark
								disabled={start < 1}
								className="to-start"
								onClick={() => changePage(1)}
							>
								To Start
							</Button>
						)}
						{...renderButtons()}
					</ButtonsBlock>
					<Info>
						viewed: {viewed.toLocaleString('ru-RU')} /{' '}
						{items.toLocaleString('ru-RU')}
					</Info>
				</Grid>
			</WrapperPagination>
		)
	);
};
export default Pagination;
