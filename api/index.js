var http = require('http'),
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
routes = require('./Routes/routes.js'),
app = express(),
port = 27019;

mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);

mongoose.connect('mongodb://xeb:lgml2102lmr2705@localhost:27017/xeb', { useMongoClient: true }, (err, res) => {
  if(err) {
    throw err;
  }else{
    var mod = http.createServer(app).listen(port, (err, res) => {
        if(err) {
            console.log("Error al conectar al servidor HTTP");
        }else{
            console.log('Conectado al servidor HTTP por el puerto ' + port);
        }
    });
  }
});
