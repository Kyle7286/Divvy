
/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
  const express = require('express');
  const session = require('express-session');
  const routes = require('./controllers');
  const sequelize = require('./config/connection');
  const SequelizeStore = require('connect-session-sequelize')(session.Store);

/* -------------------------------------------------------------------------- */
/*                                Setup Server                                */
/* -------------------------------------------------------------------------- */

  // Stand up express server and specify port for listning
  const app = express();
  const PORT = process.env.PORT || 3001;


  // Define and use session object
  const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };
  app.use(session(sess));

/* -------------------------------------------------------------------------- */
/*                              Define Middleware                             */
/* -------------------------------------------------------------------------- */

  // Define middleware for use on ALL paths starting with '/' on homepage
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(routes);

  // Serve up static assets (usually on heroku)
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

/* -------------------------------------------------------------------------- */
/*                         Sync DB and Start Listning                         */
/* -------------------------------------------------------------------------- */

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log('Now listening on http://localhost:' + PORT)
  );
});

/*
  // Start the API server
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
*/

