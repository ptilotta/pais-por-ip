const argv = require('./config/yargs.js').argv;
const ip = require('./ip/ip.js').getIP;

let getInfo = async(consultoIP) => {
    try {
        let pais = await ip(argv.ip);

        return `El pais para la IP ${argv.ip} es ${ pais }`;

    } catch (e) {
        return `No se puede determinar el pais para la IP ${ argv.ip }\n${e}`;
    }
}

getInfo(argv.ip)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));