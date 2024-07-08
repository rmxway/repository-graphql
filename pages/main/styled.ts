import styled, { css } from 'styled-components';

import { media } from '@/src/theme';

export const GridForRepos = styled.div<{ $isLoading: boolean }>`
	display: grid;
	grid-template-columns: 1fr;
	gap: 20px;
	margin: 20px 0 40px;
	transition: opacity 0.3s;

	${media.greaterThan('small')`
		grid-template-columns: 1fr 1fr;
	`}

	${({ $isLoading }) =>
		$isLoading &&
		css`
			opacity: 0.4;
			pointer-events: none;
		`}
`;
