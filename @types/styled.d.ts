import 'styled-components';

export interface Colors {
	primary: string;
	secondary: string;
	danger: string;
	dark: string;
	warn: string;
	gray: {
		$1: string;
		$2: string;
		$3: string;
		$4: string;
		$5: string;
		$6: string;
		$7: string;
		$8: string;
		$9: string;
	};
}

declare module 'styled-components' {
	export interface DefaultTheme {
		name: string;
		colors: Colors;
	}
}
