import { darken, desaturate } from 'polished';
import { DefaultTheme } from 'styled-components';

import { Colors } from '@/@types/styled';

const primary = '#d930d6';
const secondary = '#3ad974';
const danger = '#ec3c3c';
const warn = '#f8c43f';

export const colors: Colors = {
	primary,
	secondary,
	danger,
	dark: desaturate(0.9, darken(0.2, secondary)),
	warn, 
	gray: {
		$1: '#f3f3f3',
		$2: '#e3e3e3',
		$3: '#cdcdcd',
		$4: '#bebebe',
		$5: '#a5a5a5',
		$6: '#747474',
		$7: '#595959',
		$8: '#434343',
		$9: '#222222',
	},
};

export const defaultTheme: DefaultTheme = {
	name: 'light',
	colors,
};
