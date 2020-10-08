/* eslint consistent-return:0 import/order:0 */

const express = require('express');
const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const app = express();

const httpRequest = require('./infra/httpRequest/usecases')();
const envConfig = require('../config/envConfig');

const appBasePath = process.env.REACT_APP_PUBLIC_PATH || envConfig('APP_BASE_PATH');
const appName = process.env.REACT_APP_NAME || envConfig('APP_NAME');
let serviceApiHost = envConfig('SERVICE_API_HOST');
const isDemo = process.env.NODE_ENV === 'demo';
if (isDemo) {
  serviceApiHost = envConfig('SERVICE_API_HOST_DEMO');
}

const options = {
  serviceApiHost,
  appBasePath,
  appName,
  httpRequest,
};

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
const basePathForAPI = appBasePath.replace(/\/*$/, '');
app.use(`${basePathForAPI}/api/verifyUser`, require('./routes/verifyUser')(options));
app.use(`${basePathForAPI}/api/member/login`, require('./routes/login')(options));
app.use(`${basePathForAPI}/api`, require('./routes/api')(options));
app.get(`${basePathForAPI}/company/:company_code`, (req, res)=>{
  res.redirect(`${basePathForAPI}/login?code=${req.params.company_code}`);
})

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: `${basePathForAPI}/`,
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';
const customPort = envConfig('PORT') || port;

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

// Start your app.
app.listen(customPort, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(customPort);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(customPort, prettyHost, url);
  } else {
    logger.appStarted(customPort, prettyHost);
  }
});
