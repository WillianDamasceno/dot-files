## Packages

```bash
npm install -D tailwindcss postcss autoprefixer @tailwindcss/typography daisyui @tailwindcss/aspect-ratio @tailwindcss/container-queries
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
