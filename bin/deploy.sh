#!/bin/sh

REPOS=ng-bt-resume
BRANCH=gh-pages
ROOT_DIR=$PWD

# PREPARE
ls | grep -v bin README.md | xargs rm -rf

# Clone & checkout
URL="https://github.com/DerekJi/$REPOS.git"
git clone $URL
cd $REPOS
git checkout $BRANCH

# Copy
cp -rf ./* .. -rf
cd ..
rm -rf $REPOS

# Commit
now=`date`
git add -A
git commit -m "[$now] Deployed from $REPOS@$BRANCH"

# Push to remote
echo "Please manually run 'git push' to submit the changes"
