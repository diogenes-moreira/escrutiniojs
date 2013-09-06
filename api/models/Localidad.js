/**
 * Localidad
 *
 * @module      :: Model
 * @description :: Este objeto representa una localidad
 *
 */

module.exports = {

  adapter: 'sails-mysql',

  attributes: {
  	nombre: "string",
	partidoId: "integer",
	codigoPostal: "integer"    
  }

};
