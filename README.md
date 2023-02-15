# gulp-build

<h2>Description</h2>

gulp-build is a build for building static html sites. At the heart of gulp-build is the gulp task runner and the wepback module builder.<br/>
This documentation was created to clarify points that are not sufficiently highlighted in the comments of the gulpfile.js file.

<h2>How to start</h2>

<h3>Dev mode</h3>
To run a build in development mode:

```
npm start
```

<h3>Production mode</h3>
To run a build in production mode:

```
npm run build
```

<h2>Tasks</h2>

<ul>
  <li>Image minification without quality loss</li>
  <li>Converts sass code to css and minifies it</li>
  <li>Automatically places cross-browser prefixes</li>
  <li>Creating a source-map for JS and CSS files (only in development mode)</li>
  <li>Creating svg sprites</li>
</ul>
  
<h2>Dependicies and libs</h2>

<h3>Libs</h3>

<ul>
  <li>bootstrap(default)</li>
</ul>

<h3>Dependicies</h3>

Dependicies in package.json

```
"dependencies": {
    "@babel/polyfill": "^7.12.1",
    "core-js": "^3.17.2",
    "es6-promise": "^4.2.8",
    "jquery": "^3.6.0",
    "nodelist-foreach-polyfill": "^1.2.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.15.4",
    "@babel/core": "^7.15.5",
    "@babel/preset-env": "^7.15.4",
    "babel-loader": "^8.2.2",
    "browser-sync": "^2.26.14",
    "clean-css": "^5.1.0",
    "cross-env": "^7.0.3",
    "del": "^6.0.0",
    "gulp": "^4.0.2",
    "gulp-autoprefixer": "^7.0.1",
    "gulp-clean-css": "^4.3.0",
    "gulp-cli": "^2.3.0",
    "gulp-file-include": "^2.3.0",
    "gulp-group-css-media-queries": "^1.2.2",
    "gulp-if": "^3.0.0",
    "gulp-imagemin": "^7.1.0",
    "gulp-newer": "^1.4.0",
    "gulp-rename": "^2.0.0",
    "gulp-sass": "^4.1.0",
    "gulp-sass-glob": "^1.1.0",
    "gulp-sourcemaps": "^3.0.0",
    "gulp-uglify": "^3.0.2",
    "gulp-webp": "^4.0.1",
    "webpack": "^5.52.0",
    "webpack-cli": "^4.8.0",
    "webpack-stream": "^7.0.0"
  },
```

<h2>Versions</h2>
npm 8.1.2 <br/>
node 14.18.1


