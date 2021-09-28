# yuku.takahashi.coffee

My personal blog site. It is implemented on [Next.js](https://nextjs.org).

## Development

### Requirements

- node v16

### Setup

```bash
yarn install
```

### Start server

```bash
yarn start
```

Now open http://localhost:3000 to access the development app.

### Writing Blog Posts

Put `.mdx` and `.ipynb` file under the pages/blog directory. Each file needs to satisfy the following condition depending on its extension:

* `.mdx`
  * Export metadata as `metadata`.
  * Export layout as default.
* `.ipynb`
  * Add `.metadata.post_metadata`

See src/posts.ts for the details of the interface of the metadata object.

## Deployment

Every push to `workspace` will deploy a new version of this site to GitHub Pages. Deploys happen automatically.
