const { Router, response } = require('express');
const { json, urlencoded } = require('body-parser');
const ip = require('ip');

module.exports = args => {
  const { appName, serviceApiHost, httpRequest } = args;
  const router = Router();

  router.use(json());
  router.use(urlencoded({ extended: false }));

  router.post('/', (req, res) => {
    const { method, baseUrl, path } = req;
    const options = {
      url: `${serviceApiHost}${baseUrl.replace(new RegExp(`/${appName}`), '')}${path}`,
      method,
      headers: {
        ...req.headers,
        pragma: 'no-cache',
        'cache-control': 'no-cache',
        'x-forwarded-for': req.headers['x-forwarded-for'] || ip.address(),
      },
    };

    options.body = req.body;
    options.json = true;

    try {
      return httpRequest(options, (error, resposne, body) => {
        if (response) {
          if (response.statusCode === 200) {
            return res.status(200).json(body);
          }
        }
        return res.status(500).json({ Error: 'error' });
      });
    } catch (e) {
      return res.status(500).json({ Error: e });
    }
  });

  return router;
};
