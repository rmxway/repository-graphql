import { darken, desaturate } from 'polished';
import styled, { css } from 'styled-components';

export interface ButtonUIProps {
	$primary?: boolean;
	$secondary?: boolean;
	$danger?: boolean;
	$dark?: boolean;
}

const mixinButton = ($background = '#fff', $color = '#fff') => css`
	border-color: transparent;
	background-color: ${$background};
	color: ${$color};

	&:hover {
		background-color: ${darken(0.05, $background)};
	}

	&:active {
		background-color: ${darken(0.1, $background)};
	}

	&:disabled,
	&:disabled:hover {
		background-color: ${desaturate(0.4, $background)};
		color: ${desaturate(0.6, $color)};
		opacity: 0.45;
		pointer-events: none;
		cursor: default;
	}
`;

export const ButtonUI = styled.button<ButtonUIProps>`
	${({ theme, $danger, $dark, $primary, $secondary }) => css`
		position: relative;
		border: none;
		background: none;
		height: 30px;
		min-width: 30px;
		text-align: center;
		line-height: 30px;
		padding: 0 10px;
		color: #222;
		border-radius: 8px;
		transition: 0.1s;
		cursor: pointer;

		background-color: #eee;
		&:hover {
			background-color: #ddd;
		}

		&:disabled,
		&:disabled:hover {
			background-color: ${theme.colors.gray.$2};
			color: ${theme.colors.gray.$5};
			cursor: default;
		}

		&:active {
			top: 1px;
		}

		${() => {
			if ($primary) return mixinButton(theme.colors.primary);
			if ($secondary) return mixinButton(theme.colors.secondary);
			if ($danger) return mixinButton(theme.colors.danger);
			if ($dark)
				return mixinButton(theme.colors.dark);
			return null;
		}}
	`}
`;
