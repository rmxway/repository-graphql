import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { media } from '@/src/theme';
import { SkeletonAnimation } from '@/src/theme/animations';

export const RepositoryCardWrapper = styled.div<{ $skeleton?: boolean }>`
	position: relative;
	background-color: #fff;
	overflow: hidden;
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
	padding: 12px 10px;
	border-radius: 8px;
	transition: box-shadow 0.2s;

	&:after {
		content: '';
		position: absolute;
		top: 40px;
		right: 0;
		bottom: 0;
		width: 40px;
		background-image: linear-gradient(to left, #fff 30%, #fff0 100%);
	}

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

	a {
		text-decoration: none;
	}

	&:hover {
		top: -1px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
	}

	${media.greaterThan('small')`
		padding: 14px 20px;
	`}
`;

export const Image = styled.img`
	position: relative;
	width: 50px;
	height: 50px;
	max-width: 100%;
	border-radius: 8px;
	display: block;
	overflow: hidden;
	flex-shrink: 0;
	margin-right: 10px;
	z-index: 1;
	background-color: ${(props) => props.theme.colors.gray.$2};
	object-fit: cover;
	object-position: center;
`;

export const TopBlock = styled(NavLink)`
	display: inline-flex;
	align-items: center;
	text-decoration: none;
	flex-wrap: nowrap;
	width: 100%;
	margin-bottom: 8px;

	& > span {
		font-size: 1.25rem;
		margin-right: 10px;

		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		display: -webkit-box;
		overflow: hidden;
	}
`;
