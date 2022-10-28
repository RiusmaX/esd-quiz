module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('https://strapi.esd-quiz.sergent.tech'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
