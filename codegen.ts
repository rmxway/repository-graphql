import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'src/queries/schema.docs.graphql',
	documents: ['src/**/*.ts', '!src/gql/**/*'],
	ignoreNoDocuments: true,
	generates: {
		'./src/gql/': {
			preset: 'client',
		},
	},
};

export default config;
