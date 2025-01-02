import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser
    },
    settings: {
      react: {
        version: "detect" // Detecta automáticamente la versión de React.
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // No requiere que React esté en alcance para JSX.
      "react/prop-types": "off",         // No requiere PropTypes.
      "react/jsx-uses-react": "off",    // Desactiva la regla obsoleta para React en JSX.
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
