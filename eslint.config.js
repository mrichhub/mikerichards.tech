import eslint from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"

export default tseslint.config(
	{
		ignores: ["dist"],
	},
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	reactHooks.configs.flat["recommended-latest"],
	reactRefresh.configs.vite,
	{
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			globals: globals.browser,
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			"@typescript-eslint/no-non-null-assertion": "off",
		},
	},
)
