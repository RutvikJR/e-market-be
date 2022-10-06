require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
  tokenKey: process.env.ACCESS_TOKEN_SECRET
};
