/**
 * Categoria
 *
 * @module      :: Model
 * @description :: Este objeto represta una categoria de la planilla de escrutino ejemplo Senadores.
 *
 */

module.exports = {

  adapter: 'sails-mysql',

  attributes: {
  	nombre:"string",
	/*orden como aparecen de izquierda a derecha*/
	orden:"integer"
	/*Simplicado es si esta categoria es parte del escrutinio simplificado*/

  }

};
