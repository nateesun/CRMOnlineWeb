const jwt = require('jsonwebtoken');

module.exports = args => {
  const { secret, uiSecret, tokenAge } = args;
  const options = {
    algorithm: 'HS256',
    notBefore: 0,
    expiresIn: Number(tokenAge),
  };

  const sign = (payload, signSecret = secret, signOptions = options) =>
    jwt.sign(payload, signSecret, signOptions);

  const signWebToken = async payload =>
    new Promise(async (resolve, reject) => {
      try {
        resolve(sign(payload, uiSecret, options));
      } catch (e) {
        reject(e);
      }
    });

  const readWebToken = async token => {
    if (jwt.verify(token, secret)) {
      return jwt.decode(token);
    }
    throw new Error('unauthorized');
  };

  return {
    sign,
    signWebToken,
    readWebToken,
  };
};
