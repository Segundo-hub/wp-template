const WebpackMix = require("laravel-mix");
require("laravel-mix-imagemin");

const theme = "custom-theme"; // Your theme name
const project = "wp-temp"; // Your directory in laragon or XAMPP, WAMPP and other Servers
const themePath = `wp-content/themes/${theme}`;
const resources = `${themePath}/src`;
const VueFile = `${themePath}/vue`;

WebpackMix.setPublicPath(`${themePath}/dist`);
WebpackMix.options({
    processCssUrls: false,
}).sourceMaps(false, "inline-source-map")


// ============================== SASS FILES ================================

WebpackMix.sass(`${themePath}/sass/main.scss`, `css/bundle.css`).options({
    postCss: [
        process.env.NODE_ENV === "production" && require("autoprefixer"),
        require("postcss-combine-media-query"),
        require("postcss-sort-media-queries"),
    ],
})

// ============================== JS FILES   ================================

WebpackMix.js(`${resources}/js/index.js`, `${themePath}/dist/js/bundle.js`)

// process.env.NODE_ENV === "production" && WebpackMix.babel(`${themePath}/dist/js/bundle.js`, `${themePath}/dist/js/bundle.js`);

// ============================== TS FILES   ================================

// WebpackMix.ts(`${resources}/ts/index.ts`, `${themePath}/dist/js/bundle-ts.js`);

// ============================== VUE FILES  ================================

WebpackMix.js(`${VueFile}/index.js`, `public/chuck.js`).extract(["@vue"])
  .vue({ version: 3, runtimeOnly: true });


WebpackMix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: "img-optimize-loader",
                options: {
                    compress: {
                        mode: "high",
                    },
                },
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules(?!\/foundation-sites)|bower_components/,
                loader: "babel-loader"
            } 
        ],
    },
});

WebpackMix.browserSync({
    proxy: `http://localhost/${project}`,
    reload: false,
    files: [
        `${themePath}/**/*.php`,
        `${themePath}/**/*.js`,
        `${themePath}/**/*.css`,
        `${themePath}/**/**/*.twig`,
    ],
});