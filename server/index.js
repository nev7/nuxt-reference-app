
const express = require('express')
const consola = require('consola')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000


let addUser = require('../server/routes/addUser');
let getUser = require('../server/routes/getUser');
let checkUser = require('../server/routes/checkUser');

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

app.use(bodyParser.json());
app.use(cors());

//connect to the database
mongoose.connect(`mongodb://admin:admin1234@ds227171.mlab.com:27171/registered-users`);

//check connection
let db = mongoose.connection;
db.on("error", console.error.bind(console, "Database connection error"));
db.once("open", function (callback) {
  console.log("Database connection successful");
});

app.use('/', addUser);
app.use('/', getUser);
app.use('/', checkUser);

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
