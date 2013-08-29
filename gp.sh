#!/bin/sh
git add *.*
git commit -m $1
git push -u origin develop
git checkout master
git merge develop
git push -u origin master
git checkout develop