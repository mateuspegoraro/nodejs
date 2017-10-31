var configura = require('./config/express');
var app = configura();

app.set('view engine', 'ejs'); 
app.get('/produtos', function(req, res){
	console.log('atendendo a requisição');
	res.render("produtos/lista");

});
app.listen(3000, function(){
	console.log("Servidor rodando");
});