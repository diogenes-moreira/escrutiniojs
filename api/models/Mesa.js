/**
 * Mesa
 *
 * @module      :: Model
 * @description :: este objeto representa a una mesa especifica
 *
 */

module.exports = {
 
  adapter: 'sails-mysql',
 
  attributes: {
		numero:"integer",
		escuelaId:"integer",
 		escuela: function(){
			var salida;
			Escuela.findOne({id:this.escuelaId}).done(
				function(err, escuela){
					salida=escuela;
			});
			return salida;
		}	
	}
} 
