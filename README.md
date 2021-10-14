# Timber with Twig and Laravel Mix Template

## Use

- ### 1 Install Wordpress and necesary plugins like ACF

- ### 2 Install Timber and ACF Integration 

- ### 3 Clone this repository

```bash
$ git clone https://github.com/Segundo-hub/wp-template
```

- ### 4 Copy `custom-theme` directory in your theme and rename like you


## For this step I need you to have node js installed


Check if you have nodejs installed

```bash
$ node --v
```
```bash
$ 14.1
```

#### next install node dependecies


```bash
$ npm install
```

#### Set Config in `webpack.mix.js`
Setting Theme Name and Project Directory

```js
// webpack.mix.js
const WebpackMix = require('laravel-mix');
require('laravel-mix-imagemin');

const theme = "one-theme"; // Your theme name
const project = "one-theme" // Your directory in laragon or XAMPP, WAMPP and other Servers
const themePath = `wp-content/themes/${theme}`;
const resources = `${themePath}/src`;

WebpackMix.setPublicPath(`${themePath}/dist`);
WebpackMix.options({
    fileLoaderDirs: {
        fonts: `${themePath}/fonts`
    },
    processCssUrls: false
})

WebpackMix.js(`${resources}/js/index.js`, `${themePath}/dist/js/bundle.js`)
WebpackMix.sass(`${themePath}/sass/main.scss`, `css/bundle.css`).options({
    postCss: [
        process.env.NODE_ENV === "production" && require("autoprefixer"),
        require("postcss-combine-media-query"),
        require('postcss-sort-media-queries')
    ]
});

WebpackMix.webpackConfig({
    module: {
        rules: [{
            test: /\.(png|jpe?g|gif)$/i,
            loader: "img-optimize-loader",
            options: {
                compress: {
                    mode: "high"
                }
            }
        }]
    }
})

WebpackMix.browserSync({
    proxy: `http://localhost/${project}`,
    files: [
        `${themePath}/**/*.php`,
        `${themePath}/**/*.js`,
        `${themePath}/**/*.css`,
        `${themePath}/**/**/*.twig`,
    ]
});
```

#### Before run 

```bash
$ npm run dev 
```


