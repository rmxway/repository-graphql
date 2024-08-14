import styled, { css } from 'styled-components';

type FlexTypes = {
	$justify?:
		| 'space-between'
		| 'center'
		| 'space-around'
		| 'flex-start'
		| 'flex-end'
		| 'stretch';
	$align?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
	$direction?: 'column' | 'row';
	$wrap?: 'wrap' | 'nowrap';
	$gap?: number;
	$mb?: number;
};

/**
 * Flex styled component
 * @param {?string} $justify - 'space-between' | 'center' | 'space-around' | 'flex-start' | 'flex-end'
 * @param {?string} $align - 'center' | 'flex-start' | 'flex-end' | 'stretch'
 * @param {?string} $direction - 'column' | 'row'
 * @param {?string} $wrap - 'wrap' | 'nowrap'
 * @param {?number} $gap - example: 30
 * @param {?number} $mb - Margin bottom. Example: 30
 */

export const Flex = styled.div<FlexTypes>`
	${({
		$direction = 'row',
		$wrap = 'wrap',
		$align = 'flex-start',
		$justify = 'stretch',
		$gap,
		$mb,
	}) => css`
		position: relative;
		display: flex;
		flex-wrap: ${$wrap};
		flex-direction: ${$direction};
		justify-content: ${$justify};
		align-items: ${$align};
		gap: ${$gap ? `${$gap}px` : 0};
		margin-bottom: ${$mb ? `${$mb}px` : 0};
	`}
`;

export default Flex;
