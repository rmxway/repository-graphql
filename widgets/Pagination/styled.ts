import styled, { css } from 'styled-components';

import { ButtonUI } from '@/shared/Button/styled';
import { Grid } from '@/shared/Layout';
import { media } from '@/src/theme';

export const WrapperPagination = styled.div<{ $isLoading?: boolean }>`
	position: relative;
	opacity: 1;

	& > ${Grid} {
	}

	${({ $isLoading }) =>
		$isLoading &&
		css`
			pointer-events: none;
			opacity: 0.5;
		`}

	${media.greaterThan('medium')`
			& > ${Grid} {
				grid-auto-flow: column;		
			}
		`}
`;

export const Info = styled.div`
	${({ theme }) => css`
		color: ${theme.colors.gray.$6};
	`}
`;

export const ButtonsBlock = styled(Grid)`
	overflow: hidden;
	overflow-x: auto;
	padding-bottom: 20px;

	${media.greaterThan('medium')`
		padding-bottom: 0;
	`}

	& > ${ButtonUI} {
		min-width: 34px;

		.to-start {
			min-width: 70px;
		}
	}
`;
