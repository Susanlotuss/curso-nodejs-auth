require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUrl: process.env.DATABASE_URL,
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  mailerUser: process.env.MAILER_USER,
  mailerPass: process.env.MAILER_PASS,
  toUser: process.env.TO_USER
}

module.exports = { config };
