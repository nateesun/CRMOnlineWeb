const { Router } = require('express');
const { json, urlencoded } = require('body-parser');

module.exports = args => {
  const { appName, serviceApiHost, httpRequest } = args;
  const router = Router();

  router.use(json());
  router.use(urlencoded({ extended: false }));

  const serviceProvider = (req, res) => {
    const { method, baseUrl, path } = req;
    const completeUrl = `${serviceApiHost}${baseUrl.replace(new RegExp(`/${appName}`), '')}${path}`;
    const options = {
      url: completeUrl,
      method,
      headers: {
        ...req.headers,
      },
    };

    if (method !== 'GET') {
      options.body = req.body;
      options.json = true;
    }

    try {
      return httpRequest(options, (error, response, body) => {
        if (response.statusCode === 200) {
          return res.status(200).json(body);
        } else {
          return res.status(response.statusCode).json({ Error: response.statusMessage });
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
