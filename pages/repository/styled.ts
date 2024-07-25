import styled, { css } from 'styled-components';

import { Grid } from '@/shared/Layout';

export const RepositoryWrapper = styled(Grid)`
	margin-top: 20px;
	font-size: 1.2rem;

	img {
		width: 150px;
		height: 150px;
		border-radius: 200px;
		margin-top: 20px;
	}

	p {
		font-size: 1.5rem;
		line-height: 1.2;
		font-weight: 300;
		margin: 10px 0;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		margin-top: 10px;
	}

	i {
		font-style: normal;
		font-size: 1rem;
		color: ${({ theme }) => theme.colors.gray.$5};
	}
`;

export const Lang = styled.li<{ $color: string }>`
	${({ theme, $color }) => css`
		position: relative;
		display: flex;
		align-items: center;
		color: ${theme.colors.gray.$9};
		border-radius: 8px;
		margin-right: 20px;
		margin-bottom: 8px;
		z-index: -1;

		&:before {
			position: relative;
			left: 0;
			content: '';
			width: 12px;
			height: 12px;
			border-radius: 20px;
			background-color: ${$color};
			margin-right: 4px;
			z-index: 1;
		}
	`}
`;
