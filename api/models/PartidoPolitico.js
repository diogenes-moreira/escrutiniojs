/**
 * PartidoPolitico
 *
 * @module      :: Model
 * @description :: este objeto representa a los partido politicos a incluir en la planilla de escrutinio
 *		   cabe aclara que la propiedad de valido indica que los votos asociados a este partido
 *                 no se consideraran, esto es porque los votos nulos, recurridos etc.
 *                 para el voto en blanco hay que crear un partido con voto valido..  
 */

module.exports = {

  adapter: 'sails-mysql',

  attributes: {
  	nombre:"string",
	/*Orden en el que van a aparece los partido politcos en la planilla*/
	orden:"integer",
	/*El numero de partido es un string porque viene cualquier cosas*/
	numero:"string",
	votoValido:"boolean"
  }


};
