import debounce from 'lodash.debounce';

export const debounceFunction = (ms: number = 300) =>
	debounce((fn: () => unknown) => fn(), ms);
