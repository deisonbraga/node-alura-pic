var http = require('http');
var app = require('./config/express');
var db = require('./config/database');

http.createServer(app).listen(3000, function(){
  console.log('Servidor rodando na porta: ' + this.address().port);
});
