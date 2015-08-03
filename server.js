var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var app2 = express().createServer
var io = require('socket.io').listen(app2);

//Middleware
app.use(bodyParser());
app.use(cors());
app.use(express.static(__dirname + '/public')); 


// Connections
var port = 3000;






var mongooseUri = 'mongodb://localhost/urbanity';
mongoose.connect(mongooseUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
 console.log('Mongoose connected to your soul on:', mongooseUri);
})

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

app.listen(port, function () {
  console.log('This is port:', port);
})