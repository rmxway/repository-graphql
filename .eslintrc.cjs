module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-type-checked',
		'prettier',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
	],
	plugins: [
		'react-refresh',
		'@typescript-eslint',
		'unused-imports',
		'simple-import-sort',
		'prettier',
		'react',
		'import',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	settings: {
		'import/resolver': {
			typescript: {},
			node: {
				extensions: ['.ts', '.tsx', '.js'],
			},
		},
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
	},
	rules: {
		'no-console': 1,
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'unused-imports/no-unused-imports': 'warn',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
			},
		],
		'import/no-named-as-default': 'off',
		'import/prefer-default-export': 'off',
		'import/no-mutable-exports': 'off',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'import/no-extraneous-dependencies': [
			'off',
			{
				devDependencies: true,
			},
		],
		'unused-imports/no-unused-imports': 'error',
		'react/react-in-jsx-scope': 'off',
		'react/display-name': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-argument': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off'
	},
};
