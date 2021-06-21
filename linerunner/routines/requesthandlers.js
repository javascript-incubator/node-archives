'use strict';

let request = require('request');
let simplify = require('./../lib/geojsonsimplify');
let country = require('countryjs');
let { DEFAULTTOLERANCE } = require('../constants/internalconstants');
let { ReverseGeocode } = require('../routines/promises');

const CrossOriginResponse = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
};

const CoreLineRunner = (req, res, next) => {
    ReverseGeocode({ lat: req.body.lat, lng: req.body.lng })
        .then(location => location.results[0].components.country_code.toUpperCase())
        .then(countryCode => country.geoJSON(countryCode))
        //simplify geojson or not
        .then(geojson => req.body.rdp && simplify(geojson, DEFAULTTOLERANCE) || geojson)
        .then(geojson => res.send(geojson))
        .catch(err => res.send(err));
};

const LineRunnerLegacy = (req, res, next) => {
    request(req.params.url, function (error, response, body) {
        res.send(simplify(JSON.parse(body), req.params.tol));
    });
};

module.exports = { CrossOriginResponse, CoreLineRunner, LineRunnerLegacy };
