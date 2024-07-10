import styled, { css } from 'styled-components';

export const InputWrapper = styled.label`
	${({ theme }) => css`
		position: relative;
		display: inline-block;
		width: 100%;
		margin-bottom: 10px;

		input {
			padding: 16px 20px;
			border: 1px solid ${theme.colors.gray.$4};
			border-radius: 12px;
			background-color: white;
			width: 100%;
			padding-right: 50px;
			outline: none;
			font-size: 1.4rem;
			font-weight: 100;

			&::placeholder {
				color: ${theme.colors.gray.$4};
			}
		}

		span {
			position: absolute;
			right: 0;
			color: ${theme.colors.gray.$5};
			font-size: 1.5rem;
			width: 50px;
			text-align: center;
			line-height: 3.5rem;
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
