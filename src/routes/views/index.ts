import * as keystone from 'keystone';
const io = require('socket.io');
const cors = require('cors');

export = function (req, res) {

      const server = keystone.httpServer;

      const view = new keystone.View(req, res);
      const locals = res.locals;

      // locals.section is used to set the currently selected
      // item in the header navigation.
      locals.section = 'home';
      cors();
      startWebSocket(io(server));
      // Render the view
      view.render('index');

};

function startWebSocket(io) {
      console.log("Socket.io server started.");
      io.on('connection', function (socket) {

            console.log('A user connected.');

            // io.emit('Name', { username: 'jinbin'});

            socket.on('eventEq', function () {
                  console.log(`get eventEq`);
                  io.emit('Name', { username: 'jinbin'});
            });

            socket.on('eventTyphoon', function () {
                  console.log(`get eventTyphoon`);
                  io.emit('Name', { username: 'typhoon' });
            });

            socket.on('disconnect', function () {
                  console.log('a user leave.');
            });

      });
      const eq = io
            .of('/eq')
            .on('connection', function (socket) {
                  console.log('One eq client connect');
                  socket.emit('eq message', {
                        that: 'only',
                        '/eq': 'will get'
                  });

                  socket.on('disconnect', function () {
                        console.log('eq user leave.');
                  });
            });

            eq.emit('eq message', {
                  everyone: 'in',
                  '/eq': 'will get'
            });

      const typhoon = io
            .of('typhoon')
            .on('connection', function (socket) {
                  console.log('One typhoon client connect');
                  socket.emit('item', {
                        news: 'typhoon'
                  });
                  socket.on('disconnect', function () {
                        console.log('typhoon user leave.');
                  });
            });
}


