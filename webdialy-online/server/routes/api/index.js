const { Router } = require('express');
const { json, urlencoded } = require('body-parser');
const cookieParser = require('cookie-parser');

module.exports = args => {
  const {
    appName,
    serviceApiHost,
    httpRequest,
    jwtUseCases,
    loggerApp: logger,
    passport,
  } = args;
  const router = Router();

  router.use(json());
  router.use(urlencoded({ extended: false }));
  router.use(cookieParser())

  const saveTokenToCookie = ({ res, token, path = '/' }) => {
    logger.log('info', `Saving Cookie Token: ${JSON.stringify(token)}`);
    const tokenExpire = 30 * 60;
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: tokenExpire * 1000,
      secure: 0,
      path,
    });
  };

  const removeCookieFromToken = ({ res }) => {
    logger.log('info', `Clear Cookie Token`);
    res.clearCookie('token');
  };

  const serviceProvider = (req, res) => {
    const { method, baseUrl, path } = req;
    const completeUrl = `${serviceApiHost}${baseUrl.replace(
      new RegExp(`/${appName}`),
      '',
    )}${path}`;
    const options = {
      url: completeUrl,
      method,
      headers: {
        ...req.headers,
      },
      path,
    };

    if (method !== 'GET') {
      options.body = req.body;
      options.json = true;
    }

    try {
      return httpRequest(options, (error, response, body) => {
        if (response.statusCode === 200) {
          if (options.path === '/login') {
            const { email } = options.body;
            const token = jwtUseCases.sign({ email });
            saveTokenToCookie({ res, token, path: '/' });
          }
          return res.status(200).json(body);
        } else {
          return res
            .status(response.statusCode)
            .json({ Error: response.statusMessage });
        }
      });
    } catch (e) {
      return res.status(500).json({ Error: e });
    }
  };

  router.get('*', serviceProvider);
  router.post('*', serviceProvider);
  router.put('*', serviceProvider);
  router.patch('*', serviceProvider);
  router.delete('*', serviceProvider);

  return router;
};
