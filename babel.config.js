module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    // define assets folder
                    'qha-assets': './assets/images',
                    // use only one version of react (avoid breaking hooks)
                    react: './node_modules/react',
                },
            },
        ],
    ],
};
