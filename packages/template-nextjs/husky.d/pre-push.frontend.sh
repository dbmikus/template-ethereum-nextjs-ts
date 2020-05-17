#!/bin/bash

set -euo pipefail

cd "$(dirname "$0")"/..

last_cmd=$(echo "$HUSKY_GIT_STDIN" | grep -E '^\(delete\)' > /dev/null; echo $?)
if [ $last_cmd != 0 ] ; then
    npm run lint
    npm run ts:type-check
    npm run test
fi
