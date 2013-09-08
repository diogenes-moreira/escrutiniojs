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
        this.escrutinios = new Array();
	
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
			ids="primero";
		}
		for(var i=0;i<len;i++){
			var escrutinio = self.escrutinios()[i];
			if(escrutinio.listaId()==lista.id && escrutinio.categoriaId()==categoria.id){
				if(!primero)
					ids=name;
				primero=false;
				return "<input id='"+ ids + "' type='text' class='carga' name='"+i+"' />";
			}}
		return "";	
	}; 
	
	this.load = function(){
                ajax(baseUri+"escuela/"+escuelaId, function(data){
                        	self.escuela(data);
                	});
                ajax(baseUri+"carga/escrutinios/" +  mesaId,function(data) {
                        self.escrutinios = ko.mapping.fromJS(data);
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
	
	this.bindData=function(){
		$('.carga').each(function(){
			ko.applyBindingsToNode(this, { value: self.escrutinios()[this.name].cantidad } );
		})
	}


	this.enviar= function(){
		$.each(self.escrutinios(),function(){			
			$.ajax({
				url:baseUri+'escrutinio/'+this.id(), 
				async: false,
				data: ko.toJSON(this),
				type:'PUT',
				dataType: "json",
				contentType:"application/json; UTF-8"
				});				
		})
		$('#Tabla').load(baseUri+"carga/registrar");
		
	}	

     };

