/**
 * AbmController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  index: function(req,res){
	res.view({title:"ABM's"});
  },
  
  categoria: function(req,res){
  	res.view({layout: false});
  }

};
