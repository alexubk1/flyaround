var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('web/build/')
    .setPublicPath('/web')
    .addEntry('main', './assets/scss/main.scss')
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSassLoader()
    .autoProvidejQuery();

module.exports = Encore.getWebpackConfig();