## Packages

```bash
npm install -D tailwindcss postcss autoprefixer @tailwindcss/typography daisyui @tailwindcss/aspect-ratio @tailwindcss/container-queries
```

```js
// tailwind.config.js

module.exports = {
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require("daisyui"),
  ],
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
  },
};
```

```js
// postcss.config.cjs

//  @type {import('postcss-load-config').Config}
module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nested",
    tailwindcss: {},
    autoprefixer: {},
  },
};
```
