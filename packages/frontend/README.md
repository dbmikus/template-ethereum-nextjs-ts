# Next.js Template repo

This is a template repo of a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).
You should not do development with this repo, but instead create another repo instancece
from this template.

## Getting Started

First, run the development server:

```bash
npm install --no-save
# or
npm ci

npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you
edit the file.

## Creating a repo instance from the template

If you want to create a repo instance from the template without the git history, do the
following from this directory:

```
cd /path/to/template-nextjs
EXPORTFILEPATH=/tmp/template-nextjs.repo.tar
REPODIRPATH=/path/to/your/repodir
git archive --format=tar HEAD > $EXPORTFILEPATH
mkdir $REPODIRPATH
cd $REPODIRPATH
tar -xvf $EXPORTFILEPATH

# Now make the new directory a git repo
git init
git add .
git commit -m "Init repo from template-nextjs"
```

Or you can use `git clone` if you want to include the history of the template repo in your
new repo. If you use `git clone`, you should probably run `git remote rm origin`
afterwards to disassociate the repo.

## Running with Docker

```
sudo docker-compose up --build
```

## Troubleshooting

If you are running tests using VS Code and you use NVM, you might see an error like this:

```
TypeError: _gracefulFs(...).realpathSync.native is not a function
    at tryRealpath (/home/dbmikus/workspace/template-nextjs/node_modules/jest-util/build/tryRealpath.js:26:39)
    at getCacheDirectory (/home/dbmikus/workspace/template-nextjs/node_modules/jest-config/build/getCacheDirectory.js:89:33)
    at Object.<anonymous> (/home/dbmikus/workspace/template-nextjs/node_modules/jest-config/build/Defaults.js:39:50)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
```

If you encounter this problem, launch VS Code from your terminal where you have activated
NVM and set your node version.
