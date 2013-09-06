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
        cantidadDeVotantes:"integer",
	mesaId:"integer"
  }

};
