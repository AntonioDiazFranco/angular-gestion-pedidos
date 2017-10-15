console.log("Hola Antonio Diaz");
const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');
const app        = express();
const api        = require('./server/routes/api');

// Routes
app.get('/',  function(req, res) {
    res.sendFile(path.resolve('public/index.html'));
});

console.log("[app] Routes APIs ");
app.use(api);

// setting port
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('[app] Express server listening on port ' + server.address().port);
});
