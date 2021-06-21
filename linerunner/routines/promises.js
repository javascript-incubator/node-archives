const { LOCATIONIQKEY, LOCATIONIQAPIURL, OPENCAGEKEY, OPENCAGEURL } = require('../constants/resources');
const request = require('request');

const ReverseGeocode = location => new Promise((resolve, reject) => {
    request(OPENCAGEURL(location), (error, response, body) => resolve(JSON.parse(body)));
});


module.exports = { ReverseGeocode };
