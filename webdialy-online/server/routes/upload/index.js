const { Router } = require('express');
const { json, urlencoded } = require('body-parser');

module.exports = args => {
  const { appName, serviceApiHost, httpRequest } = args;
  const router = Router();

  router.use(json());
  router.use(urlencoded({ extended: false }));

  const serviceProvider = (req, res) => {
    const { method, baseUrl, path } = req;
    const completeUrl = `${serviceApiHost}${baseUrl.replace(
      new RegExp(`/${appName}`),
      '',
    )}${path}`;
    const options = {
      ...req.headers,
      url: completeUrl,
      method,
      path,
    };
    if (method !== 'GET') {
      options.body = req.body;
      options.json = true;
    }

    try {
      return httpRequest(options, (error, response, body) => {
        return res.status(200).json(body);
      });
    } catch (e) {
      return res.status(500).json({ Error: e });
    }
  };

  router.post('*', serviceProvider);

  return router;
};
