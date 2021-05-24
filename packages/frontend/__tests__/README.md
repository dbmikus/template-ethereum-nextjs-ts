# Tests

We prefer to collocate tests alongside their source files in the same directory instead of
in this `__tests__` directory. However, some tests cannot be put in the normal source
tree. For example, every file in `pages/` becomes a page, so you cannot have
`pages/index.tsx` and `pages/index.test.tsx`.
