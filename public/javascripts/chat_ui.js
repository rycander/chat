$(document).ready(function () {
  if (typeof window.ChatClient === 'undefined') {
    window.ChatClient = {};
  }
  
  var chat = new ChatClient.Chat(io());
  
  $('.message-form').submit(function(event){
    event.preventDefault();
    var $form = $(event.target);
    var msg = $form.find('#text-box').val();
    $('#text-box').val("");
    chat.sendMessage(msg);
  });
});