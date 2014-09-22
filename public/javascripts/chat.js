(function () {
  if (typeof window.ChatClient === 'undefined') {
    window.ChatClient = {};
  }
  
  var Chat = window.ChatClient.Chat = function(socket) {
    this.socket = socket;
    startMessageListener.call(this);
  };
  
  Chat.prototype.sendMessage = function (message) {
    this.socket.emit('message', message);
  };
  
  var startMessageListener = function () {
    this.socket.on('message', function(data) {
      console.log(data);
      var $li = $('<li>');
      $li.text(data);
      $('.message-display').append($li);
    });
  }
})();



// var createChat = function (server) {
//   var io = require('socket.io')(server);
//
//   io.on('connection', function (socket) {
//     // socket.emit('some_event_name', { hello: 'world' });
//     socket.on('message', function (data) {
//       console.log(data);
//       socket.emit(message, data);
//     });
//   });
// };
