
export default {
  name: 'userId'??'',
  secret: process.env.secret??'',
  resave: false,
  saveUninitialized: false,
  // store: sessionStore,
  cookie: {
    secure: false,
    maxAge: 24 * 60 * 60 * 1000 ,
    httpOnly: false,
  },
}