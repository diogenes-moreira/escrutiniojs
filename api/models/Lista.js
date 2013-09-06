/**
 * Lista
 *
 * @module      :: Model
 * @description :: Este objeto representa una lista dentro de un partido
 *		   Es posible que en algunos casos se quiera carga solo parte del certificado de
 *                 escrutinio para esos se utliza la marca simplicado, ejemplo si solo se quiere cargar
 *		   solo 2 listas y despues cargar lo demas.	 
 *
 *
 */

module.exports = {


  adapter: 'sails-mysql',

  attributes: {
 	nombre:"string",
	orden:"integer",
	partidoPoliticoId:"integer",
	/*identifica si se incorpora a la carga simplificada*/
	simplificado:"integer"
  }

};
