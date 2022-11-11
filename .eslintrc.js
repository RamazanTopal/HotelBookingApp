module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ["plugin:prettier/recommended", "standard-with-typescript"],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	rules: {
		quotes: ["error", "double"],
		indent: [4, "tab"],
		"no-tabs": 0,
		"new-cap": "off"
	}
};
