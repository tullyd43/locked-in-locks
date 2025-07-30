# general-template

Create new repository from template on github

git clone <url> to local repo folder

run npm init -y to create package.json (skip if using provided default setup)

replace placeholders in package.json

run npm install to install dependencies from package.json

run npm init @eslint/config

If using ESM in webpack, make sure to change from module.export to export default in common, prod, and dev. Set type to module in package.json. And import stylesheet into entrypoint js file

git pull origin main updates local repo from up to date github repo