const passport =require('passport');

// Aqui declaramos las estrategias de autenticación que vamos a usar.
const LocalStrategy = require('./strategies/local.strategy');
const JwtStrategy = require('./strategies/jwt.strategy');

passport.use(LocalStrategy);
passport.use(JwtStrategy);
