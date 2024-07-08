import debounce from 'lodash.debounce';

export function debounceFunction(fn: () => void, ms = 300) {
	return debounce(() => fn(), ms);
};
