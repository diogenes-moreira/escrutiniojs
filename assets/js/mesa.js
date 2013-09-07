 var sorter=function (a,b){
	return a.orden - b.orden;
}


var ajax = function (url,cb){
	$.ajax({url:url,dataType:'json',async:false,success:cb});
}


 var  ViewModel = function(){
        self = this;

        this.escuela = ko.observable();
        this.listas = ko.observableArray();
        this.partidos = ko.observableArray();
        this.categorias = ko.observableArray();
        this.escrutinios = ko.observableArray();
	
	this.partido = function(lista){
		var len= self.partidos().length;
		for(var i=0;i<len;i++){
			if(lista.partidoPoliticoId == self.partidos()[i].id)
				return self.partidos()[i];
		}
	};
        
	this.input=function(lista,categoria){
		var len= self.escrutinios().length;
		var ids = "";
		if(primero){
			primero=false;
			ids="id='primero' "
		}
		for(var i=0;i<len;i++)
			if(self.escrutinios()[i].listaId==lista.id && self.escrutinios()[i].categoriaId==categoria.id)
				return "<input "+ ids + "type='text' class='carga' name='esc_"+ self.escrutinios()[i].id+"'/>"
		return "";	
	}; 
	
	this.load = function(){
                ajax(baseUri+"escuela/"+escuelaId, function(data){
                        	self.escuela(data);
                	});
                ajax(baseUri+"carga/escrutinios/" +  mesaId,function(data) {
                        	self.escrutinios(data);
                	});
                ajax(baseUri+"partidoPolitico", function(data) {
                        self.partidos(data);
                });
                ajax(baseUri+"lista", function(data) {
			data.sort(sorter);		
                        self.listas(data);
                });

                 ajax(baseUri+"categoria", function(data) {
			data.sort(sorter);
			self.categorias(data);
                });
        };

     };

