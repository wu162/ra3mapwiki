@echo off

echo building...
call build.bat
echo building-complete.

cd src/.vuepress/dist
git init
git add -A
git commit -m 'auto-deploy'
git push -f git@gitee.com:wu162/ra3mapwiki.git master:gh-pages
