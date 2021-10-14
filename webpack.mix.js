const WebpackMix = require("laravel-mix");
require("laravel-mix-imagemin");

const theme = "custom-theme"; // Your theme name
const project = "one-theme"; // Your directory in laragon or XAMPP, WAMPP and other Servers
const themePath = `wp-content/themes/${theme}`;
const resources = `${themePath}/src`;

WebpackMix.setPublicPath(`${themePath}/dist`);
WebpackMix.options({
    fileLoaderDirs: {
        fonts: `${themePath}/fonts`,
    },
    processCssUrls: false,
});

WebpackMix.js(`${resources}/js/index.js`, `${themePath}/dist/js/bundle.js`);
WebpackMix.sass(`${themePath}/sass/main.scss`, `css/bundle.css`).options({
    postCss: [
        process.env.NODE_ENV === "production" && require("autoprefixer"),
        require("postcss-combine-media-query"),
        require("postcss-sort-media-queries"),
    ],
});

WebpackMix.webpackConfig({
    module: {
        rules: [{
            test: /\.(png|jpe?g|gif)$/i,
            loader: "img-optimize-loader",
            options: {
                compress: {
                    mode: "high",
                },
            },
        }, ],
    },
});

WebpackMix.browserSync({
    proxy: `http://localhost/${project}`,
    files: [
        `${themePath}/**/*.php`,
        `${themePath}/**/*.js`,
        `${themePath}/**/*.css`,
        `${themePath}/**/**/*.twig`,
    ],
});