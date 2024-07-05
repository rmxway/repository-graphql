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

			outline: none;
		}
	`}
`;
