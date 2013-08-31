#!/bin/sh
git add .
git commit -m 'iconzz!!'
git push -u origin develop
git checkout master
git merge develop
git push -u origin master
git checkout develop
