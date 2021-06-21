const LOCATIONIQKEY = '6f1a3e0b08f4fd125808';
const LOCATIONIQAPIURL = ({ lat, lng }) => `http://locationiq.org/v1/reverse.php?format=json&key=${LOCATIONIQKEY}&lat=${lat}&lon=${lng}&zoom=16`;
const OPENCAGEKEY = '93d639c2f2e101a955c9dd2ec8704fca';
const OPENCAGEURL = ({ lat, lng }) => `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&pretty=1&key=${OPENCAGEKEY}`;

module.exports = { LOCATIONIQKEY, LOCATIONIQAPIURL, OPENCAGEKEY, OPENCAGEURL };
