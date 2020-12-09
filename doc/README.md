# Boiler Plate Middleware

This library is for reusable boilerplate just to get basic functions down

## Installing

The npm package is scoped to @jstraney/jas-middleware but I haven't published to npm yet you can clone from github if you want it. I wouldn't use this exact repo for official business but do implement similar patterns in practice. `requireAuth` is a stub and really shouldn't be used in production.

```
npm i -S git+https://github.com/jstraney/jas-middleware.git
```

## Usage

```
const {
  requireAuth,
  useArgs,
  consumeArgs,
  viewJSON,
} = require('jas-middleware');

const {
  createBlogPost,
  readBlogPost,
} = require('path-to-controller')

// for rendering JSON
router.post('/blog-post', [
  requireAuth(),
  useArgs({
    body: ['title', 'content', 'tags', 'published'],
  }),
  consumeArgs(createBlogPost),
  viewJSON(),
]);

// for rendering a blog post template. assumes no authorization required.
router.get('/blog-post/:id', [
  useArgs({
    params: ['id'],
    query: ['lang'],
  }),
  consumeArgs(readBlogPost),
  viewTemplate({
    template: 'blog-post/view',
  }),
]);
```

### requireAuth

Checks for user object in session. Assumes some kind of express-connect middleware is used. Again, this is a stub and is just for testing/basic use cases (single user app)

### useArgs

Reduces req into a single argument object for use by controller. Ensure properties are unique on body, query, and params!

### consumeArgs

Passes the args object off to a thenable function. Populates the res.locals object with result or error if the function passes or fails.

### viewJSON/viewTemplate

Finally renders a JSON or template response using the res.locals object
