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
		numero:{
			type:"integer",
			index:true},
		escuelaId:"integer",
	}
} 
