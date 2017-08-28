var http = require('http');

var server = http.createServer(function(req,res){
    if(req.url =="/produtos"){
      res.end("<html><body>listando os produtos da loja</body>");
    } else {
      res.end("<html><body>home da casa do codigo</body></html>");
    }
});

server.listen(3000);

console.log("servidor ta rodando");