#!/usr/bin/env bash

set -e

git config --global push.default simple
git config --global user.name "$USER_NAME"
git config --global user.email "$USER_EMAIL"

git clone -q --branch=master $CIRCLE_REPOSITORY_URL temp

cd temp
find . -maxdepth 1 ! -name '.git' ! -name '.' ! -name '..' -exec rm -rf {} \;
mv ../out/* ../out/.nojekyll ../.circleci .

git add -f .
git commit --allow-empty -m "$(git log origin/workspace -1 --pretty=%B)"
git push -f
