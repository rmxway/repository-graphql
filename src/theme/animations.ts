import { css } from 'styled-components';

export const FadeIn = css`
	opacity: 0;

	@keyframes fadeIn {
		to {
			opacity: 1;
		}
	}

	animation: fadeIn 1s forwards;
`;

export const SkeletonAnimation = css`
	${({ theme }) => css`
		${`background: linear-gradient(
			110deg,
			${theme.colors.gray.$1} 8%,
			#f7f7f7 18%,
			${theme.colors.gray.$1} 33%
		);`}
		border-radius: 5px;
		background-size: 200% 100%;
		animation: 1.5s shine linear infinite;

		@keyframes shine {
			to {
				background-position-x: -200%;
			}
		}
	`}
`;
