
/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
const express = require('express');
const session = require('express-session');
const routes = require('./routes');
const sequelize = require('./config/connection');
const transporter = require('./config/nodemailer');
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

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// KEEP THIS BELOW THE STATIC ASSETS!!!!!!!!
app.use(routes);
/* -------------------------------------------------------------------------- */
/*                         Sync DB and Start Listning                         */
/* -------------------------------------------------------------------------- */

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log('Now listening on http://localhost:' + PORT)
  );
});


