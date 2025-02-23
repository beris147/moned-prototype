import type { CodegenConfig } from '@graphql-codegen/cli';
import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'http://localhost:54321/graphql/v1',
	documents: 'src/**/*.tsx',
	generates: {
		'src/lib/gql/': {
			preset: 'client',
			documentTransforms: [addTypenameSelectionDocumentTransform],
			plugins: [],
			config: {
				scalars: {
					UUID: 'string',
					Date: 'string',
					Time: 'string',
					Datetime: 'string',
					JSON: 'string',
					BigInt: 'string',
					BigFloat: 'string',
					Opaque: 'any',
				},
			},
		},
	},
};

export default config;
