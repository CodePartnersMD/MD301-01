1. Set up Heroku Account
2. Set up Github repo
3. ```npm install -g heroku```
4. ```heroku login```
5. Navigate into repo and enter ```heroku create```
6. ```npm init```
7. ```npm install --save express```
8. in package.json include ```"engines" : { "node" : "version" }``` and ensure you have a script with ```"start" : "node server.js"```
9. add server.js and .gitignore
10. ```heroku buildpacks:set heroku/nodejs```
11. test with ```heroku local web```
12. ACP
13. ```git push heroku master```
14. ```heroku ps:scale web=1```
15. ```heroku apps:rename myPortfolio```
16. ```heroku open```

