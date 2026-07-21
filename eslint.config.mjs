import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Block raw HTML injection app-wide (XSS surface).
      "react/no-danger": "error",
      // Block direct DOM HTML writes outside React.
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "AssignmentExpression[left.type='MemberExpression'][left.property.name='innerHTML']",
          message:
            "Do not assign to innerHTML. Use React text/JSX. The only approved HTML injection is GTM in src/analytics/GoogleTagManager.tsx.",
        },
        {
          selector:
            "CallExpression[callee.property.name='insertAdjacentHTML']",
          message:
            "Do not use insertAdjacentHTML. Use React text/JSX instead.",
        },
      ],
    },
  },
  {
    // Sole approved exception: official GTM bootstrap snippet.
    files: ["src/analytics/GoogleTagManager.tsx"],
    rules: {
      "react/no-danger": "off",
    },
  },
]);

export default eslintConfig;
