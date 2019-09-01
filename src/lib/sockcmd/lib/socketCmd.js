// var spawn = require('child_process').spawn;

function start(io) {
  console.log("socketCmd 'start' was called.");
  io.on('connection', function (socket) {

    console.log('a user connected.');
    function send(key) {
      var response = JSON.stringify({ key: key });
      socket.send(response, function (err) {
        if (err) console.log(err);
      });
    };

    socket.on('disconnect', function () {
      console.log('a user leave.');
    });

  });

}

exports.start = start;