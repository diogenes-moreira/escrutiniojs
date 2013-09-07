/**
 * Escrutinio
 *
 * @module      :: Model
 * @description :: Este objeto representa un de los casilleros de la planilla de escrutinio.
 *
 */

module.exports = {

  adapter: 'sails-mysql',

  attributes: {
	mesaId:{
		type: 'integer',
      		index: true
	},	

	listaId:"integer",
        categoriaId:"integer",
        cantidad:"integer",
	habilitado:"boolean"
  }

};
