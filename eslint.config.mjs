import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import prettier from 'eslint-config-prettier/flat'


const eslintConfig = defineConfig([
    ...nextVitals,
    prettier,
    globalIgnores([
        '.next/**',
        'out/**',
        'build/**',
        'next-env.d.ts',
    ]),
])

export default eslintConfig