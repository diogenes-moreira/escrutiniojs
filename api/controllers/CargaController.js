/**
 * CargaController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */


var actualizador = function(err, escrutinio){
                                console.log("encontrado "+escrutinio.id);
                                escrutinio.cantidad=this.valor;
				escrutinio.save(function(err,esc){
				if(err)console.log(err)});
                        };




module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */
 
	actualizador: actualizador,
	 
	index: function(req, res) {
		return res.view();
	},

	mesa: function(req, res) {
		Mesa.findOne({numero: req.param('mesa')}).done(
			function(err,mesa){ 
				res.view({mesa: mesa , layout: false})
			
		})
	},

	escrutinios: function(req, res){
		Escrutinio.find({
			mesaId: req.param("id"),
			habilitado: true,			
		}).exec(function(err, escrutinios){
			res.json(escrutinios)
		})
	},
	
	registrar: function(req,res){	
		res.view({layout: false});
	}
};
