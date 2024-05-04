@echo off

echo building...
call build.bat
echo building-complete.

cd src/.vuepress/dist
git init
git add -A
git commit -m 'auto-deploy'
git push -f git@github.com:wu162/Ra3MapWiki.git master:gh-pages
