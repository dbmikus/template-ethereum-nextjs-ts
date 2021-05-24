# Ethereum and Next.js template with Typescript

This is a template repo of an Ethereum project with a
[Next.js](https://nextjs.org/) frontend bootstrapped with
[`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).
You should not do development with this repo, but instead create another repo
instancece from this template.

For Ethereum, we use Hardhat, Waffle, and ethers.js.

Next.js and the Ethereum package both support Typescript.

## Creating a repo instance from the template

If you want to create a repo instance from the template without the git history, do the
following from this directory:

```
cd /path/to/template-ethereum-nextjs-ts
EXPORTFILEPATH=/tmp/template-ethereum-nextjs-ts.repo.tar
REPODIRPATH=/path/to/your/repodir
git archive --format=tar HEAD > $EXPORTFILEPATH
mkdir $REPODIRPATH
cd $REPODIRPATH
tar -xvf $EXPORTFILEPATH

# Now make the new directory a git repo
git init
git add .
git commit -m "Init repo from template-ethereum-nextjs-ts"
```

Or you can use `git clone` if you want to include the history of the template repo in your
new repo. If you use `git clone`, you should probably run `git remote rm origin`
afterwards to disassociate the repo.

## Git hooks

Configure the repository's `core.hooksPath` to point to `githooks` at the root
of the repository.
