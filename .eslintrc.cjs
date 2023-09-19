module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:svelte/recommended", "plugin:perfectionist/recommended-natural", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    extraFileExtensions: [".svelte"],
  },
  env: {
    browser: true,
    es2022: true,
  },
  plugins: ["@typescript-eslint", "svelte", "perfectionist"],
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      rules: {
        "svelte/indent": "off",
        indent: ["off"],
      },
    },
  ],
  settings: {
    svelte: {
      ignoreWarnings: ["@typescript-eslint/no-unsafe-assignment", "@typescript-eslint/no-unsafe-member-access"],
    },
  },
  ignorePatterns: ["*.cjs"],
  globals: {
    $$Generic: "readonly",
  },
  rules: {
    eqeqeq: ["warn", "smart"],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", ignoreRestSiblings: true }],

    "perfectionist/sort-imports": [
      "error",
      {
        type: "line-length",
        order: "asc",
        groups: [
          "type",
          ["builtin", "external"],
          "internal-type",
          "internal",
          ["parent-type", "sibling-type", "index-type"],
          ["parent", "sibling", "index"],
          "object",
          "unknown",
        ],
        "newlines-between": "always",
        "read-tsconfig": true,
      },
    ],

    "perfectionist/sort-map-elements": "off",
    "perfectionist/sort-named-imports": [
      "error",
      {
        type: "line-length",
        order: "asc",
      },
    ],
    // style
    "svelte/html-self-closing": ["warn"],
    "svelte/no-spaces-around-equal-signs-in-attribute": ["error"],
    "svelte/shorthand-attribute": ["warn"],
    "svelte/shorthand-directive": ["warn"],
    "svelte/sort-attributes": ["warn"],
    "svelte/spaced-html-comment": ["warn", "always"],
  },
};
