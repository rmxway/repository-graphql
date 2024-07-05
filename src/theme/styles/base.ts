import { css } from 'styled-components';

export const base = css`
	* {
		box-sizing: border-box;
	}

	html,
	body {
		height: 100%;
	}

	body {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: normal;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
			sans-serif;
		background-color: #fafafa;
	}

	a {
		color: #777;
	}

	#root {
		height: 100%;
	}

	h1, h2, h3, h4, h5 {
		margin-bottom: 20px;
	}

	h1 {
		font-size: 3rem;
	}

	h2 {
		font-size: 2rem;
	}

	h3 {
		font-size: 2.5rem;
	}

	h4 {
		font-size: 2rem;
	}

	h5 {
		font-size: 1rem;
	}
`;
