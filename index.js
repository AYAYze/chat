const webSocket = require('ws')

let wss = new webSocket.Server({port:3000});

let connect = [];

wss.on('connection', ws =>{
	connect.push(ws);
	ws.on('message', data=>{
		connect.forEach(socket =>{
			if(socket != ws) socket.send(data)
		})
	})
})
