const argv = require('yargs').options({
    ip: {
        alias: 'i',
        desc: 'IP a Consultar',
        demand: true
    }
}).argv

module.exports = {
    argv
}