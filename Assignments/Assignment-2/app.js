//  Sravani
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const path = require('path');	

const app = express();
const router = require('./routes/external/twitter');

const port = 3000;

// Getting Twitter Oauth Information
const auth = {
  consumer_key: config.get('consumer_key'),
  consumer_secret: config.get('consumer_secret'),
  token: config.get('token'),
  token_secret: config.get('token_secret'),
};

// Allows Express to parse JSON body in Request and Response
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use((req, res, next) => {
  req.auth = auth;
  next();
});
app.get('/', function (req, res) {	
  res.sendFile(path.join(`${__dirname}/static/html/index.html`));	
})
// Adding routes to server
app.use('/tweet', router);

// Starting server
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});


