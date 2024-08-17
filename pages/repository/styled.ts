import styled, { css } from 'styled-components';

import { media } from '@/src/theme';

export const RepositoryWrapper = styled.div`
	display: grid;
	gap: 30px;
	font-size: 1.2rem;
	margin-top: 20px;
	grid-template-columns: 80px 1fr;

	img {
		width: 80px;
		height: 80px;
		border-radius: 100%;
		object-fit: cover;
	}

	p {
		font-size: 1.5rem;
		line-height: 1.2;
		font-weight: 300;
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

	${media.greaterThan('small')`
		grid-template-columns: 150px 1fr;

		img {
			width: 150px;
			height: 150px;
		}
	`}
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
