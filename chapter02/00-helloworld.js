const http = require('http')
const port = process.env.port || 3000

const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'}) //  text/plain <==> text/html
	res.end('Hello world!')
})

server.listen(port, () => console.log(`server started on port ${port};` + 'press Ctrl-C to terminate....'));
