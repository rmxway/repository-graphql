import { generateMedia } from 'styled-media-query';

const breakpoints = {
	huge: '1800px',
	large: '1100px',
	medium: '768px',
	small: '600px',
};

const media = generateMedia(breakpoints);

export { breakpoints, media };
export default media;
