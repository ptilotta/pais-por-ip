const axios = require('axios');

const getIP = async(ip) => {
    let apiIP = `https://api.ip2country.info/ip?${ ip }`;
    let resp = await axios.get(apiIP);
    return resp.data.countryName;
}

module.exports = {
    getIP
}