// 1er ERROR
// Estaba mal la ruta en el package.json que buscaba al archivi App.js
// Tenías = "main": "./templates/App.js"
// Y es = "main": "./src/templates/App.js"

// 2do ERROR
// Tenés que requerir ('http')
// Tenés que requerir ('fs')

// 3er ERROR
// Tenés mal la ruta a cada archivo en el método readFileSync
// El path correcto sería __dirname + "/libros.html"
// Esto es así porque el archivo App.js está en la misma carpeta

// 4to ERROR
// Tenés mal la ruta a bootstrap en el HTML y a su vez el Content-Type
// El Content-Type es 'text/css'
// Chusmeate el libros.html y fijate como hice para llamar a bootstrap en el <link>

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
	switch (req.url) {
		case "/":
			res.writeHead(200, { "Content-Type": "text/html" });
			var html = fs.readFileSync(__dirname + "/index.html", "utf8");
			res.end(html);
		break;
			res.writeHead(200, { "Content-Type": "text/html" });
			var html = fs.readFileSync(__dirname + "/libros.html", "utf8");
			res.end(html);
		break;
		case "/discos":
			res.writeHead(200, { "Content-Type": "text/html" });
			var html = fs.readFileSync(__dirname + "/template/discos.html", "utf8");
			res.end(html);
		break;
		case "/new":
			res.writeHead(200, { "Content-Type": "text/html" });
			var html = fs.readFileSync(__dirname + "/template/new.html", "utf8");
			res.end(html);
		break;
		case "/verTodo":
			res.writeHead(200, { "Content-Type": "text/html" });
			var html = fs.readFileSync(__dirname + "/verTodo.html", "utf8");
			res.end(html);
		break;
		case "/bootstrap":
			res.writeHead(200, { "Content-Type": "text/css" });
			var cssBootstrap = fs.readFileSync(__dirname + "/css/bootstrap.min.css", "utf8");
			res.end(cssBootstrap);
		break;
		default:
			res.writeHead(400, { "Content-Type": "text/plain" });
			res.end("404 No Found");
	}
}).listen(3030, "localhost", () => console.log("Listening 3030 port"));
















//const http = require("http")
//const fs = require ("fs")


//http.createServer().listen(9090, "localhost")



/*
http.createServer((req, res)=>{
	switch (ruta){
case
	}
	res.writeHead(200,{"Conten-Type": "text/html; charset=utf-8"})
	fs.readFileSync(__dirname + "/index.html", "utf8")
	res.end(html)
}).listen(3030, "localhost", () => console.log ("listening 3030 port"))
*/


/*
http.createServer((req, res)=>{
	res.writeHead(200,{"Conten-Type": "text/plain; charset=utf-8"})
	res.end("Hola omo estannnn")
}).listen(3030, "localhost", )

*/

/*
jap_solo [13:00]
Sin título
http.createServer((req, res) => {
	switch (req.url) {
		case '/':
			res.writeHead(200, { 'Content-Type': 'text/html' });
			var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
			html = html.replace('{user}', users.user1.name + ' ' + users.user1.lastName);
			res.end(html);
			break;
		case '/aboutUs':
			res.writeHead(200, { 'Content-Type': 'text/html' });
			var html = fs.readFileSync(__dirname + '/about-us.html', 'utf8');
			res.end(html);
			break;
		default:
			res.writeHead(400, { 'Content-Type': 'text/plain' });
			res.end('404 No Found');
	}
	// fs.readFile(__dirname + '/index.html', 'utf8', (err, data) => {
	// 	res.end(data);
	// });
}).listen(3030, 'localhost', () => console.log('Listening 3030 port'));
*/
