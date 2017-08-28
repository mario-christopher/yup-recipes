console.log('Node Env : ', process.env.NODE_ENV);
var configFile = `./config/webpack.${process.env.NODE_ENV == 'production' ? 'prod' : 'dev'}.js`
console.log('Using Config : ', configFile);
module.exports = require(configFile);