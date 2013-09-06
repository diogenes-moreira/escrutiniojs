/**
 * Escuela
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  adapter: 'sails-mysql',

  attributes: {
  	circuito:"string",
	codigo:"string",
	nombre:"string",
	direccion:"string",
	localidadId:"integer",
	mesaDesde:"integer",
	mesaHasta:"integer"
  }

};
