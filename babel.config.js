module.exports = {
    presets: [
        '@babel/preset-react',
        ['@babel/preset-env', {
            targets: {
                browsers: ['last 2 versions'],
            },
        }],
    ],
    plugins: [
        '@babel/plugin-transform-react-jsx',
        '@babel/plugin-transform-object-assign',
        '@babel/plugin-proposal-object-rest-spread',
        ['@babel/plugin-transform-runtime', {
            regenerator: true,
        }],
    ],
};
