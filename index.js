if (process.env.NODE_ENV === 'development') {
  require('./constants');
  require('./scripts/start');
}

if (process.env.NODE_ENV === 'production') {
  require('./build/main'); // eslint-disable-line
}
