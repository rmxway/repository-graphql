import styled, { css } from 'styled-components';

type GridTypes = {
	$templateColumns?: string;
	$templateRows?: string;
	$justify?:
		| 'space-between'
		| 'center'
		| 'space-around'
		| 'flex-start'
		| 'flex-end';
	$align?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
	$direction?: 'column' | 'row';
	$gap?: number;
	$mb?: number;
};

/**
 * Grid styled component
 * @param {?string} $templateColumns - example: '1fr 1fr 20px'
 * @param {?string} $templateRows - example: '1fr 1fr 20px'
 * @param {?string} $justify - 'space-between' | 'center' | 'space-around' | 'flex-start' | 'flex-end'
 * @param {?string} $align - 'center' | 'flex-start' | 'flex-end' | 'stretch'
 * @param {?string} $direction - 'column' | 'row'
 * @param {?number} $gap - example: 30
 * @param {?number} $mb - Margin bottom. Example: 30
 */

export const Grid = styled.div<GridTypes>`
	${({
		$templateColumns,
		$templateRows,
		$direction,
		$align,
		$justify,
		$gap,
		$mb,
	}) => css`
		position: relative;
		display: grid;
		grid-template-columns: ${$templateColumns || 'auto'};
		grid-template-rows: ${$templateRows || 'auto'};
		grid-auto-flow: ${$direction};
		justify-content: ${$justify || 'flex-start'};
		align-items: ${$align || 'stretch'};
		gap: ${$gap ? `${$gap}px` : 0};
		margin-bottom: ${$mb ? `${$mb}px` : 0};
	`}
`;

export default Grid;
