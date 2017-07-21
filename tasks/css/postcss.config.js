module.exports = (ctx) => ({
    map: { inline: false },
    plugins: [
        require('postcss-nested')(),
        require('postcss-css-variables')(),
        require('autoprefixer')({
            browsers: [
                "last 2 versions"
            ]
        }),
        require('cssnano')({})
    ]
})