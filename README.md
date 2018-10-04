![webpack](http://webpack.github.io/assets/logo.png)

# webpack-intro

Simple files to demo Webpack alongside https://slides.com/illepic/webpack

## Usage

During presentation, slides that feature webpack code have a corresponding folder inside . (A, B, C, etc). From anywhere in the project, run the corresponding command:

- A: `npx webpack --mode development --config ./A/webpack.config.js`
- B: `npx webpack --mode development --config ./B/webpack.config.js`
- C: `npx webpack --mode development --config ./C/webpack.config.js`
- D: `npx webpack --mode development --config ./D/webpack.config.js`
- E: `npx webpack --mode development --config ./E/webpack.config.js`
- F: `npx webpack-dev-server --mode development --config ./F/webpack.config.js`
- G: `npx webpack --mode development --config ./G/webpack.config.js`

(Webpack determines path of config files relative to package.json!)
