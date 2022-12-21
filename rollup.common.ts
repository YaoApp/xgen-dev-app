import { defineConfig } from 'rollup'

import { nodeResolve } from '@rollup/plugin-node-resolve'

export const plugins = [nodeResolve()]

export default defineConfig({
	input: ['components/Test/index.ts', 'components/A/index.ts'],
	output: {
		dir: 'public/components',
		preserveModules: true,
		format: 'systemjs'
      },
      // When using tsyringe, this item needs to be set
	context: 'false'
})
