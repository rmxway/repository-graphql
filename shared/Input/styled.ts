import styled, { css } from 'styled-components';

export const InputWrapper = styled.label`
	${({ theme }) => css`
		position: relative;
		display: inline-block;
		width: 100%;
		margin-bottom: 20px;

		input {
			padding: 10px 12px;
			border: 1px solid ${theme.colors.gray.$5};
			border-radius: 8px;
			background-color: white;
			width: 100%;
			padding-right: 50px;
			outline: none;
		}

		span {
			position: absolute;
			right: 0;
			color: ${theme.colors.gray.$5};
			font-size: 1.5rem;
			width: 40px;
			text-align: center;
			line-height: 37px;
			height: 100%;
			opacity: 0.7;
			transition: opacity 0.2s;
			cursor: pointer;

			&:hover {
				opacity: 1;
			}
		}
	`}
`;
