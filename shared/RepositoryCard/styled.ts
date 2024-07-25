import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { media } from '@/src/theme';
import { SkeletonAnimation } from '@/src/theme/animations';

export const RepositoryCardWrapper = styled.div<{ $skeleton?: boolean }>`
	position: relative;
	background-color: #fff;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
	padding: 12px 10px;
	border-radius: 8px;
	transition: box-shadow 0.2s;

	${({ $skeleton }) =>
		$skeleton &&
		css`
			${SkeletonAnimation};
			height: 95px;
			box-shadow: none;

			${media.greaterThan('small')`
				height: 108px;
			`}
		`}

	&:hover {
		top: -1px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
	}

	display: grid;
	grid-auto-flow: row;
	justify-content: start;
	gap: 4px;

	a {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	${media.greaterThan('small')`
		padding: 14px 20px;
	`}
`;

export const Image = styled.img`
	position: relative;
	height: 50px;
	max-width: 100%;
	border-radius: 8px;
	display: inline-block;
	overflow: hidden;
	z-index: 1;
	width: 100%;
	background-color: ${(props) => props.theme.colors.gray.$2};
	object-fit: cover;
	object-position: center;
`;

export const TopBlock = styled(NavLink)`
	display: flex;
	text-decoration: none;
	flex-wrap: nowrap;
	align-items: center;
	text-overflow: ellipsis;
	overflow: hidden;

	& > span {
		font-size: 1.25rem;
		display: inline-block;
		margin-right: 10px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
`;
