var createChat = function (server) {
  var io = require('socket.io')(server);

  io.on('connection', function (socket) {
    // socket.emit('some_event_name', { hello: 'world' });
    socket.on('message', function (data) {
      console.log(data);
      socket.emit('message', data);
    });
  });
};

exports.createChat = createChat;
