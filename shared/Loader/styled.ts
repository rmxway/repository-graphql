import styled, { css } from 'styled-components';

const spanDelay = (count: number) => css`
	& > span:nth-child(${count}) {
		animation-delay: ${`0.${count}s`};
	}
`;

export const LoaderWrapper = styled.div`
	position: relative;
	width: 40px;
	height: 40px;
	margin: 0 auto;

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	opacity: 0;

	animation: fadeIn 1s 1s forwards;

	@keyframes rotateCircle {
		0% {
			transform: rotate(0deg);
		}

		98%,
		100% {
			transform: rotate(360deg);
		}
	}

	span {
		position: absolute;
		left: 49%;
		display: inline-block;
		width: 5px;
		height: 5px;
		border-radius: 10px;
		background-color: #222;
		transform-origin: 0 20px;
		animation-name: rotateCircle;
		animation-duration: 1.5s;
		animation-fill-mode: both;
		animation-iteration-count: infinite;
		animation-direction: normal;
		animation-timing-function: ease-in-out;
	}

	${spanDelay(1)}
	${spanDelay(2)}
	${spanDelay(3)}
	${spanDelay(4)}
`;
