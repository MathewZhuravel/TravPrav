#!/bin/sh
git add .
git commit -m 'google locations edit box'
git push -u origin develop
git checkout master
git merge develop
git push -u origin master
git checkout develop
