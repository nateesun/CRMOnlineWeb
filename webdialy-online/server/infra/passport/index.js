const passport = require('passport');
const { Strategy: CookieStrategy } = require('passport-cookie');

module.exports = args => {
  const { loggerApp: logger, jwtUseCases } = args;
  passport.use(
    'validate-cookie',
    new CookieStrategy(async (token, done) => {
      if (token) {
        const payload = await jwtUseCases
          .readWebToken(token)
          .catch(() => done('cookie_token_is_invalid', false));
        logger.log('info', `payload(validate-cookie): ${payload}`);
        if (payload) {
          const { email } = payload;
          if (email) {
            return done(null, { email });
          }
        }
      }

      return done('cookie_token_is_missing', false);
    }),
  );

  return {
    init: () => passport.initialize(),
    validateCookie: () =>
      passport.authenticate('validate-cookie', {
        session: false,
      }),
  };
};
