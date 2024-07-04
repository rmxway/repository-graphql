import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
	position: relative;
	display: grid;
	grid-auto-flow: column;
	justify-content: start;
	gap: 20px;
	margin-bottom: 20px;

	a {
		text-decoration: none;
		color: black;
		font-weight: 600;

		transition: all 0.1s;

		&.active,
		&:hover {
			color: #3bc33b;
		}
	}
`;
