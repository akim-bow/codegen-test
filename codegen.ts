
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "schema.gql",
  documents: "src/**/*.graphql",
  generates: {
    "src/types.ts": {
      plugins: ['typescript'],
      config: {
        scalars: {
          BigInt: 'BigInt',
        }
      }
    },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: 'types.ts',
      },
      plugins: ['typescript-operations', 'typescript-graphql-request'],
    },
  }
};

export default config;
