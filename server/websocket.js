// const ws = require('ws');
//
// const wsServer = new ws.WebSocketServer({
//     port: 2000
// }, () => console.log('Server started on 2000 port'));
//
// wsServer.on('connection', function connection() {
//     ws.on('message', function (message) {
//         message = JSON.parse(message);
//         switch (message.event) {
//             case 'message':
//                 broadcastMessage(message);
//                 break;
//             case 'connection':
//                 broadcastMessage(message);
//                 break;
//         }
//     });
// });
//
// function broadcastMessage(message) {
//     wsServer.clients.forEach(client => {
//         client.send(JSON.stringify(message));
//     })
// }