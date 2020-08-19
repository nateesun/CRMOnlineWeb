const { Router, response } = require('express');
const { json, urlencoded } = require('body-parser');

module.exports = args => {
  const { serviceApiHost, httpRequest } = args;
  const router = Router();

  router.use(json());
  router.use(urlencoded({ extended: false }));

  router.post('/', (req, res) => {
    const { method, originalUrl } = req;
    const options = {
      url: `${serviceApiHost}${originalUrl}`,
      method,
      headers: {
        ...req.headers,
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
