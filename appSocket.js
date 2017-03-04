/* ************************************************************************ */
/*
    Socket IO Stuff - This is where we'll wait for socket.io events. Any 
    other module that has access to server.js:app can also wait for events.
*/
exports = module.exports = function (io) {
    // Set socket.io listeners.
    io.on('connection', function(socket) {
        console.log('client connected');
    
        socket.on('disconnect', function()= {
            console.log('client disconnected');
        });
    });
};