module.exports = function(app){
	app.get('/produtos', function(req, res){
	console.log('atendendo a requisição');
	res.render("produtos/lista");
	});	
}
