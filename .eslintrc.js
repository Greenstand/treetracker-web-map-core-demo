module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es2021: true,
		"react-native/react-native": true,
		"jest/globals": true
	},
	extends: [
		"plugin:react/recommended",
		"prettier",
		"eslint:recommended",
		"plugin:jest/recommended"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: "latest",
		sourceType: "module"
	},

	plugins: ["react", "react-native", "detox"],
	ignorePatterns: ["!.*", "dist", "node_modules"],
	rules: {
		indent: [
			"warn",
			"tab",
			{
				SwitchCase: 1,
				ignoredNodes: ["ConditionalExpression"]
			}
		],
		"linebreak-style": ["warn", "unix"],
		quotes: ["warn", "double"],
		semi: ["warn", "always"],
		"no-console": ["warn"],
		"no-unused-vars": ["warn", { vars: "all" }]
	},

	settings: {
		react: {
			version: "detect"
		}
	}
};
