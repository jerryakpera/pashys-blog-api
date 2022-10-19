require('dotenv').config();

const { env } = process;

module.exports = {
  port: env.PORT,
  endpoint: env.ENDPOINT,
  token: env.TOKEN,
};
