
/**
 * InitilizerController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */


var crearMesas = function (err, escuela){
	 for (var i = escuela.mesaDesde; i < escuela.mesaHasta + 1; i++ )
            Mesa.create({ escuelaId: escuela.id, numero:i}).done(function(err){if(err) console.log(err)})

};


var crearEscrutinio = function (lista,categoriaId){ 
	Mesa.find().exec(function(err,mesas){
		 _.each(mesas,function(mesa){
			Escrutinio.create({mesaId: mesa.id, listaId:lista.id, categoriaId:categoriaId, cantidad:0, habilitado:true}).done(function(err){if(err) console.log(err)})
		});
	})
};

var crearEscrutinioExtranjero = function (lista,categoriaId){
	Mesa.find().where({numero: {"<": 9000}}).exec(function(err,mesas){
		_.each(mesas,function(mesa){
			Escrutinio.create({mesaId: mesa.id, listaId:lista.id, categoriaId:categoriaId, cantidad:0, habilitado:true}).done(function(err){if(err) console.log(err)})
		})
	});
};



module.exports = {
	crearEscrutinio: crearEscrutinio,
  crearEscrutinioExtranjero: crearEscrutinioExtranjero,
  crearMesas: crearMesas,
  index : function(req,res){
	Partido.create({nombre:"QUILMES"}).done(
		function(err,partido){
			Localidad.create({nombre: "BERNAL",partidoId: partido.id, codigoPostal: "1876"}).done(
				function(err,localidad){
					Escuela.create({nombre:"ESCUELA EP N°6", localidadId:localidad.id, direccion:"LUIS M.DRAGO 375", codigo:"4614", circuito:"787A", mesaDesde:571, mesaHasta:582}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°18/ES N°38", localidadId:localidad.id, direccion:"AVELLANEDA 177", codigo:"4615", circuito:"787A", mesaDesde:583, mesaHasta:595}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°23", localidadId:localidad.id, direccion:"AV.SAN MARTIN 38", codigo:"4618", circuito:"787A", mesaDesde:596, mesaHasta:603}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°82/ES N°77", localidadId:localidad.id, direccion:"YAPEYU 555", codigo:"4620", circuito:"787A", mesaDesde:604, mesaHasta:616}).done(crearMesas);
					Escuela.create({nombre:"INSTITUTO MARIA AUXILIADORA", localidadId:localidad.id, direccion:"CNEL.PRINGLES 604", codigo:"4621", circuito:"787A", mesaDesde:617, mesaHasta:619}).done(crearMesas);
					Escuela.create({nombre:"INSTIT. REP. ARGENTINA", localidadId:localidad.id, direccion:"25 DE MAYO 274", codigo:"Extranjeros", circuito:"Extranjeros", mesaDesde:9018, mesaHasta:9026}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°24/ES N°40", localidadId:localidad.id, direccion:"CRAMER 721", codigo:"4602", circuito:"787", mesaDesde:530, mesaHasta:538}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°47/ES N°55", localidadId:localidad.id, direccion:"J.LOPEZ 176", codigo:"4603", circuito:"787", mesaDesde:539, mesaHasta:547}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA ET N°2", localidadId:localidad.id, direccion:"ESPORA Y CRAMER", codigo:"4607", circuito:"787", mesaDesde:548, mesaHasta:557}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°61", localidadId:localidad.id, direccion:"CASEROS 890", codigo:"7393", circuito:"787", mesaDesde:558, mesaHasta:563}).done(crearMesas);
					Escuela.create({nombre:"COLEGIO ALMAFUERTE", localidadId:localidad.id, direccion:"ESTRADA 10", codigo:"4608", circuito:"787", mesaDesde:564, mesaHasta:566}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA ES N°11", localidadId:localidad.id, direccion:"AV.SAN MARTIN 801", codigo:"10669", circuito:"787", mesaDesde:567, mesaHasta:570}).done(crearMesas);
				  Escuela.create({nombre:"ESCUELA EST N°8", localidadId:localidad.id, direccion:"175 BIS E/PILCOMAYO Y PAMPA", codigo:"11592", circuito:"788", mesaDesde:720, mesaHasta:725}).done(crearMesas);
			});
			Localidad.create({nombre: "DON BOSCO",partidoId: partido.id, codigoPostal: "1877"}).done(
				function(err,localidad){
					Escuela.create({nombre:"JARDIN DE INFANTES N°911", localidadId:localidad.id, direccion:"RIVADAVIA 248", codigo:"9240", circuito:"786", mesaDesde:434, mesaHasta:437}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA ES N°1", localidadId:localidad.id, direccion:"LOS ANDES 173", codigo:"7174", circuito:"786", mesaDesde:445, mesaHasta:457}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°42", localidadId:localidad.id, direccion:"LOS ANDES 175", codigo:"4586", circuito:"786", mesaDesde:458, mesaHasta:469}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°46/ES N°83", localidadId:localidad.id, direccion:"CHICLANA 1019", codigo:"4587", circuito:"786", mesaDesde:470, mesaHasta:477}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA MODELO M.ACOSTA", localidadId:localidad.id, direccion:"A.ALVAREZ 64", codigo:"4589", circuito:"786", mesaDesde:478, mesaHasta:479}).done(crearMesas);
					Escuela.create({nombre:"COLEGIO JUAN XXIII", localidadId:localidad.id, direccion:"MAIPU 1056", codigo:"4590", circuito:"786", mesaDesde:480, mesaHasta:483}).done(crearMesas);
			});
			Localidad.create({nombre: "QUILMES",partidoId: partido.id, codigoPostal: "1878"}).done(
				function(err,localidad){
					Escuela.create({nombre:"COLEGIO SAN FELIPE BENIZI", localidadId:localidad.id, direccion:"SAENZ PEÑA 1446", codigo:"4560", circuito:"785", mesaDesde:223, mesaHasta:228}).done(crearMesas);
					Escuela.create({nombre:"INSTITUTO SAN MARCO", localidadId:localidad.id, direccion:"PTE.PERON 1033", codigo:"11564", circuito:"785", mesaDesde:255, mesaHasta:261}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N 36", localidadId:localidad.id, direccion:"RCA. DEL LIBANO 1532", codigo:"Extranjeros", circuito:"Extranjeros", mesaDesde:9001, mesaHasta:9003}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°30/ES N°43", localidadId:localidad.id, direccion:"OTTO BEMBERG 293", codigo:"4547", circuito:"785", mesaDesde:157, mesaHasta:172}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°17", localidadId:localidad.id, direccion:"ENTRE RIOS 580", codigo:"4548", circuito:"785", mesaDesde:173, mesaHasta:181}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°22", localidadId:localidad.id, direccion:"RCA.DEL LIBANO 161", codigo:"4549", circuito:"785", mesaDesde:182, mesaHasta:187}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°16/ES N°37", localidadId:localidad.id, direccion:"R.LOPEZ 533", codigo:"4550", circuito:"785", mesaDesde:188, mesaHasta:196}).done(crearMesas);
					Escuela.create({nombre:"INSTITUTO MODELO JEAN PIAGET", localidadId:localidad.id, direccion:"BERUTTI 1355", codigo:"4564", circuito:"785", mesaDesde:197, mesaHasta:202}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°13", localidadId:localidad.id, direccion:"12 DE OCTUBRE 758", codigo:"4552", circuito:"785", mesaDesde:203, mesaHasta:212}).done(crearMesas);
					Escuela.create({nombre:"TALLER DIVINA PROVIDENCIA", localidadId:localidad.id, direccion:"SAENZ PEÑA 1407", codigo:"4553", circuito:"785", mesaDesde:213, mesaHasta:216}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA ES N°3", localidadId:localidad.id, direccion:"CORRIENTES 587", codigo:"4554", circuito:"785", mesaDesde:217, mesaHasta:222}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°12/ES N°49", localidadId:localidad.id, direccion:"F.AMOEDO 1256", codigo:"4555", circuito:"785", mesaDesde:229, mesaHasta:236}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°83/ES N°26", localidadId:localidad.id, direccion:"URQUIZA 1197", codigo:"4551", circuito:"785", mesaDesde:237, mesaHasta:247}).done(crearMesas);
					Escuela.create({nombre:"INSTITUTO NTRA.SRA.DE FATIMA", localidadId:localidad.id, direccion:"CONDARCO 2469", codigo:"4558", circuito:"785", mesaDesde:248, mesaHasta:254}).done(crearMesas);
					Escuela.create({nombre:"INSTITUTO SAN JOSE", localidadId:localidad.id, direccion:"MITRE 460", codigo:"9925", circuito:"783", mesaDesde:23, mesaHasta:30}).done(crearMesas);
					Escuela.create({nombre:"INSTITUTO RIOS DE VIDA", localidadId:localidad.id, direccion:"MARMOL 500", codigo:"7168", circuito:"784", mesaDesde:90, mesaHasta:95}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°9", localidadId:localidad.id, direccion:"MORENO 932", codigo:"4539", circuito:"784", mesaDesde:109, mesaHasta:115}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°7/ES N°31", localidadId:localidad.id, direccion:"ALBERDI 130", codigo:"4520", circuito:"783", mesaDesde:1, mesaHasta:10}).done(crearMesas);
					Escuela.create({nombre:"COLEGIO NAZARETH", localidadId:localidad.id, direccion:"GRAL.CONESA 406", codigo:"4521", circuito:"783", mesaDesde:11, mesaHasta:14}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA ES N°20", localidadId:localidad.id, direccion:"MITRE 364", codigo:"4522", circuito:"783", mesaDesde:15, mesaHasta:22}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EST N°4", localidadId:localidad.id, direccion:"VIDELA 226", codigo:"4523", circuito:"783", mesaDesde:31, mesaHasta:35}).done(crearMesas);
					Escuela.create({nombre:"COLEGIO MANUEL BELGRANO", localidadId:localidad.id, direccion:"RIVADAVIA 460", codigo:"4524", circuito:"783", mesaDesde:36, mesaHasta:45}).done(crearMesas);
					Escuela.create({nombre:"COLEGIO PRESBITERO BRUZZONE", localidadId:localidad.id, direccion:"SAN MARTIN Y SAAVEDRA", codigo:"4526", circuito:"783", mesaDesde:46, mesaHasta:50}).done(crearMesas);
					Escuela.create({nombre:"COLEGIO E.HOLMBERG", localidadId:localidad.id, direccion:"SARMIENTO 679", codigo:"4527", circuito:"783", mesaDesde:51, mesaHasta:55}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°19/ES N°7", localidadId:localidad.id, direccion:"ORTIZ DE OCAMPO 335", codigo:"4538", circuito:"784", mesaDesde:96, mesaHasta:108}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA ES N°15", localidadId:localidad.id, direccion:"A.BOTTARO 1125", codigo:"4540", circuito:"784", mesaDesde:116, mesaHasta:130}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°28/ES N°12", localidadId:localidad.id, direccion:"AGRIGENTO 475", codigo:"4545", circuito:"784", mesaDesde:131, mesaHasta:144}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°38", localidadId:localidad.id, direccion:"ECHEVERRIA 192", codigo:"4541", circuito:"784", mesaDesde:145, mesaHasta:150}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°73", localidadId:localidad.id, direccion:"AGRIGENTO E/CEVALLOS Y MONROE", codigo:"4542", circuito:"784", mesaDesde:151, mesaHasta:154}).done(crearMesas);
					Escuela.create({nombre:"COLEGIO MONSEÑOR DI PASQUO", localidadId:localidad.id, direccion:"PRIMERA JUNTA 750", codigo:"4543", circuito:"784", mesaDesde:155, mesaHasta:156}).done(crearMesas);
					Escuela.create({nombre:"CTRO.EDUC.COMPLEMENTARIO N°1", localidadId:localidad.id, direccion:"OTAMENDI 1504", codigo:"9254", circuito:"783A", mesaDesde:56, mesaHasta:59}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°79", localidadId:localidad.id, direccion:"MARINERO LOPEZ 575", codigo:"4533", circuito:"783A", mesaDesde:60, mesaHasta:69}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA ESPECIAL N°506", localidadId:localidad.id, direccion:"ALSINA E/MARINERO LOPEZ Y 91", codigo:"4534", circuito:"783A", mesaDesde:70, mesaHasta:74}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°39", localidadId:localidad.id, direccion:"MOZART Y BALCARCE", codigo:"4535", circuito:"783A", mesaDesde:75, mesaHasta:83}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°10", localidadId:localidad.id, direccion:"HUMBERTO I N°887", codigo:"9977", circuito:"783A", mesaDesde:84, mesaHasta:89}).done(crearMesas);
			});
			Localidad.create({nombre: "QUILMES",partidoId: partido.id, codigoPostal: "1879"}).done(
				function(err,localidad){
					Escuela.create({nombre:"ESCUELA EST N°1", localidadId:localidad.id, direccion:"ANDRADE 800", codigo:"11922", circuito:"791A", mesaDesde:1144, mesaHasta:1150}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP. N 35", localidadId:localidad.id, direccion:"CRAVIOTTO Y M. CANE", codigo:"Extranjeros", circuito:"Extranjeros", mesaDesde:9036, mesaHasta:9042}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA ES N°16", localidadId:localidad.id, direccion:"AV.CALCHAQUI 840", codigo:"7170", circuito:"785A", mesaDesde:262, mesaHasta:270}).done(crearMesas);
					Escuela.create({nombre:"INST.DR.ALEXANDER FLEMING", localidadId:localidad.id, direccion:"ESTANISLAO DEL CAMPO 1825", codigo:"7181", circuito:"785A", mesaDesde:316, mesaHasta:317}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°41", localidadId:localidad.id, direccion:"RESISTENCIA 1395", codigo:"9224", circuito:"785B", mesaDesde:381, mesaHasta:386}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°8/ES N°32", localidadId:localidad.id, direccion:"381 N°2323 Y AYOLAS", codigo:"4580", circuito:"785B", mesaDesde:387, mesaHasta:403}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°76/ES N°74", localidadId:localidad.id, direccion:"809 N°1890 Y 889", codigo:"4662", circuito:"788C", mesaDesde:999, mesaHasta:1007}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°55", localidadId:localidad.id, direccion:"J.B.JUSTO 3402", codigo:"4683", circuito:"791B", mesaDesde:1151, mesaHasta:1166}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA ET N°6", localidadId:localidad.id, direccion:"AV.CALCHAQUI 1894", codigo:"4568", circuito:"785A", mesaDesde:271, mesaHasta:285}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°81/ES N°25", localidadId:localidad.id, direccion:"ENTRE RIOS 2812", codigo:"4569", circuito:"785A", mesaDesde:286, mesaHasta:299}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°26/ES N°81", localidadId:localidad.id, direccion:"J.V.GONZALEZ 751", codigo:"4570", circuito:"785A", mesaDesde:300, mesaHasta:309}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°62", localidadId:localidad.id, direccion:"LA RIOJA 1637", codigo:"4573", circuito:"785B", mesaDesde:318, mesaHasta:328}).done(crearMesas);
					Escuela.create({nombre:"INSTITUTO SAGRADA FAMILIA", localidadId:localidad.id, direccion:"AV.CALCHAQUI 1251", codigo:"4574", circuito:"785B", mesaDesde:329, mesaHasta:337}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA SAN CLEMENTE", localidadId:localidad.id, direccion:"SAN MAURO CASTELVERDE 4044", codigo:"4575", circuito:"785B", mesaDesde:338, mesaHasta:344}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°27", localidadId:localidad.id, direccion:"SAN LUIS 4016-B°LA PRIMAVERA", codigo:"4576", circuito:"785B", mesaDesde:345, mesaHasta:351}).done(crearMesas);
					Escuela.create({nombre:"NTRA.SRA.DEL PERPETUO SOCORRO", localidadId:localidad.id, direccion:"AV.CALCHAQUI 4949", codigo:"4577", circuito:"785B", mesaDesde:352, mesaHasta:362}).done(crearMesas);
					Escuela.create({nombre:"INSTITUTO CRISTO REY", localidadId:localidad.id, direccion:"389 N°1964 E/AMOEDO-P.GALDOS", codigo:"7172", circuito:"785B", mesaDesde:363, mesaHasta:368}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°71", localidadId:localidad.id, direccion:"339 N°3351 E/384 Y 385", codigo:"4578", circuito:"785B", mesaDesde:369, mesaHasta:380}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°75", localidadId:localidad.id, direccion:"CHILE E IRALA", codigo:"4581", circuito:"785B", mesaDesde:404, mesaHasta:412}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°56", localidadId:localidad.id, direccion:"OTAMENDI 603", codigo:"9226", circuito:"785B", mesaDesde:413, mesaHasta:418}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°37", localidadId:localidad.id, direccion:"RCA.DEL LIBANO 5070", codigo:"4582", circuito:"785B", mesaDesde:419, mesaHasta:427}).done(crearMesas);
					Escuela.create({nombre:"COLEGIO SANTO DOMINGO", localidadId:localidad.id, direccion:"344 N°3202", codigo:"9496", circuito:"785B", mesaDesde:428, mesaHasta:433}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°68/ES N°67", localidadId:localidad.id, direccion:"819 N°921", codigo:"7415", circuito:"788B", mesaDesde:865, mesaHasta:874}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°25", localidadId:localidad.id, direccion:"802 Y 897", codigo:"4658", circuito:"788C", mesaDesde:941, mesaHasta:954}).done(crearMesas);
					Escuela.create({nombre:"COLEGIO MADRE TERESA", localidadId:localidad.id, direccion:"SANTA FE 1865 E/888 Y 889", codigo:"4659", circuito:"788C", mesaDesde:955, mesaHasta:973}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°2/ES N°2", localidadId:localidad.id, direccion:"806 N°2374 E/893 Y 894", codigo:"4660", circuito:"788C", mesaDesde:974, mesaHasta:988}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA ES N°9", localidadId:localidad.id, direccion:"810 N°1828", codigo:"9229", circuito:"788C", mesaDesde:989, mesaHasta:998}).done(crearMesas);
					Escuela.create({nombre:"INSTITUTO MALVINAS ARGENTINAS", localidadId:localidad.id, direccion:"816 N°2409", codigo:"7179", circuito:"788C", mesaDesde:1008, mesaHasta:1017}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°77", localidadId:localidad.id, direccion:"820 E/892 Y 893 S/N", codigo:"4661", circuito:"788C", mesaDesde:1018, mesaHasta:1022}).done(crearMesas);
					Escuela.create({nombre:"INSTITUTO CONSTANCIO C.VIGIL", localidadId:localidad.id, direccion:"L.AGOTE (339)N°2823", codigo:"4684", circuito:"791B", mesaDesde:1167, mesaHasta:1177}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA EP N°3", localidadId:localidad.id, direccion:"AV.LA PLATA 1751", codigo:"4571", circuito:"785A", mesaDesde:310, mesaHasta:315}).done(crearMesas);
					Escuela.create({nombre:"ESCUELA SECUND. MIGUEL CANE", localidadId:localidad.id, direccion:"MIGUEL CANE Y LAPRIDA", codigo:"Extranjeros", circuito:"Extranjeros", mesaDesde:9004, mesaHasta:9017}).done(crearMesas);
				});
				Localidad.create({nombre: "EZPELETA OESTE",partidoId: partido.id, codigoPostal: "1881"}).done(
					function(err,localidad){
						Escuela.create({nombre:"ESCUELA EP N°85", localidadId:localidad.id, direccion:"CONDARCO 5350", codigo:"4685", circuito:"791B", mesaDesde:1178, mesaHasta:1190}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°66/ES N°21", localidadId:localidad.id, direccion:"J.B.JUSTO 4851", codigo:"4686", circuito:"791B", mesaDesde:1191, mesaHasta:1206}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°34/ES N°45", localidadId:localidad.id, direccion:"ROJAS 5659", codigo:"4687", circuito:"791B", mesaDesde:1207, mesaHasta:1221}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°54/ES N°22", localidadId:localidad.id, direccion:"BRASIL Y E.DEL CAMPO", codigo:"4689", circuito:"791B", mesaDesde:1222, mesaHasta:1225}).done(crearMesas);
				});
			  Localidad.create({nombre: "SAN FCO.SOLANO",partidoId: partido.id, codigoPostal: "1881"}).done(
					function(err,localidad){
						Escuela.create({nombre:"ESCUELA EP. N 50", localidadId:localidad.id, direccion:"826 E/ 897 Y 898", codigo:"Extranjeros", circuito:"Extranjeros", mesaDesde:9030, mesaHasta:9035}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°53", localidadId:localidad.id, direccion:"844 N°2288", codigo:"4636", circuito:"788A", mesaDesde:726, mesaHasta:737}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°64", localidadId:localidad.id, direccion:"AV.PROVINCIAL Y 849", codigo:"4637", circuito:"788A", mesaDesde:738, mesaHasta:746}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°80", localidadId:localidad.id, direccion:"891 N°3121", codigo:"4639", circuito:"788A", mesaDesde:759, mesaHasta:771}).done(crearMesas);
						Escuela.create({nombre:"INSTITUTO JOSE MANUEL ESTRADA", localidadId:localidad.id, direccion:"892 N°4051 E/840 Y 841", codigo:"4640", circuito:"788A", mesaDesde:772, mesaHasta:781}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA ES N°2", localidadId:localidad.id, direccion:"844 N°2257 E/893 Y 894", codigo:"4641", circuito:"788A", mesaDesde:782, mesaHasta:797}).done(crearMesas);
						Escuela.create({nombre:"INSTITUTO JOSE HERNANDEZ", localidadId:localidad.id, direccion:"DONATO ALVAREZ E/824 Y 823", codigo:"4647", circuito:"788A", mesaDesde:798, mesaHasta:804}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°11", localidadId:localidad.id, direccion:"895 E/835 Y 836", codigo:"4642", circuito:"788A", mesaDesde:805, mesaHasta:814}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA ES N°10", localidadId:localidad.id, direccion:"899 E/MONTEVERDE Y 859", codigo:"9259", circuito:"788A", mesaDesde:815, mesaHasta:820}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°32", localidadId:localidad.id, direccion:"844 N°2270 E/893 Y 894", codigo:"4643", circuito:"788A", mesaDesde:821, mesaHasta:836}).done(crearMesas);
						Escuela.create({nombre:"INST.SAN JUAN BAUTISTA", localidadId:localidad.id, direccion:"835 N°1789 ESQ.888", codigo:"9264", circuito:"788A", mesaDesde:837, mesaHasta:840}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°57/ES N°18", localidadId:localidad.id, direccion:"865 N°2737", codigo:"4644", circuito:"788A", mesaDesde:841, mesaHasta:854}).done(crearMesas);
						Escuela.create({nombre:"INST.ALFONSINA STORNI", localidadId:localidad.id, direccion:"851 N°2251 E/893 Y 894", codigo:"9257", circuito:"788A", mesaDesde:855, mesaHasta:864}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°4", localidadId:localidad.id, direccion:"827 N°2525", codigo:"4638", circuito:"788A", mesaDesde:747, mesaHasta:758}).done(crearMesas);
				});
				Localidad.create({nombre: "VILLA LA FLORIDA",partidoId: partido.id, codigoPostal: "1881"}).done(
					function(err,localidad){
						Escuela.create({nombre:"ESCUELA EP N°51/ES N°57", localidadId:localidad.id, direccion:"874 N°4983 E/850 Y 852", codigo:"4650", circuito:"788B", mesaDesde:875, mesaHasta:887}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°43", localidadId:localidad.id, direccion:"880 Y 833", codigo:"4651", circuito:"788B", mesaDesde:888, mesaHasta:900}).done(crearMesas);
						Escuela.create({nombre:"COLEGIO SAN JOSE OBRERO", localidadId:localidad.id, direccion:"873 N°4518 E/844 Y 846", codigo:"4653", circuito:"788B", mesaDesde:901, mesaHasta:909}).done(crearMesas);
						Escuela.create({nombre:"INSTITUTO SAN GABRIEL", localidadId:localidad.id, direccion:"877 N°4728", codigo:"7178", circuito:"788B", mesaDesde:910, mesaHasta:912}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°40/ES N°40", localidadId:localidad.id, direccion:"839 N°546 E/876 Y 877", codigo:"4655", circuito:"788B", mesaDesde:913, mesaHasta:921}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°86/ES N°79", localidadId:localidad.id, direccion:"849 ESQ.883", codigo:"4656", circuito:"788B", mesaDesde:922, mesaHasta:933}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°45/ES N°54", localidadId:localidad.id, direccion:"846 N°1202 Y 882", codigo:"4649", circuito:"788B", mesaDesde:934, mesaHasta:940}).done(crearMesas);
				});
				Localidad.create({nombre: "EZPELETA",partidoId: partido.id, codigoPostal: "1882"}).done(
					function(err,localidad){
						Escuela.create({nombre:"ESCUELA ES N°5", localidadId:localidad.id, direccion:"RIO SALADO 5150", codigo:"4669", circuito:"791", mesaDesde:1069, mesaHasta:1077}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°44/ES N°53", localidadId:localidad.id, direccion:"PANAMA N°420", codigo:"4672", circuito:"791A", mesaDesde:1078, mesaHasta:1084}).done(crearMesas);
						Escuela.create({nombre:"SOCIEDAD DE FOMENTO EZPELETA", localidadId:localidad.id, direccion:"AV.SAN MARTIN 5471", codigo:"4673", circuito:"791A", mesaDesde:1085, mesaHasta:1086}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°69/ES N°68", localidadId:localidad.id, direccion:"LARREA N°3922", codigo:"4674", circuito:"791A", mesaDesde:1087, mesaHasta:1096}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°52/ES N°17", localidadId:localidad.id, direccion:"MINUTO 4849", codigo:"4676", circuito:"791A", mesaDesde:1109, mesaHasta:1120}).done(crearMesas);
						Escuela.create({nombre:"INSTITUTO ESTEBAN ECHEVERRIA", localidadId:localidad.id, direccion:"BRASIL 1450", codigo:"7182", circuito:"791A", mesaDesde:1121, mesaHasta:1126}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°74/ES N°72", localidadId:localidad.id, direccion:"V.LOPEZ N°3980", codigo:"4679", circuito:"791A", mesaDesde:1127, mesaHasta:1137}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°14", localidadId:localidad.id, direccion:"CARBONARI N°379", codigo:"4664", circuito:"791", mesaDesde:1023, mesaHasta:1034}).done(crearMesas);
						Escuela.create({nombre:"JARDIN DE INFANTES N°920", localidadId:localidad.id, direccion:"SALTA 1359", codigo:"4666", circuito:"791", mesaDesde:1035, mesaHasta:1037}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°67/ES N°66", localidadId:localidad.id, direccion:"E.ZOLA N°4799", codigo:"4667", circuito:"791", mesaDesde:1038, mesaHasta:1044}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°5", localidadId:localidad.id, direccion:"MENDOZA N°187", codigo:"4668", circuito:"791", mesaDesde:1045, mesaHasta:1050}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°49/ES N°56", localidadId:localidad.id, direccion:"RIO DESAGUADERO 5180", codigo:"4670", circuito:"791", mesaDesde:1051, mesaHasta:1059}).done(crearMesas);
						Escuela.create({nombre:"INSTITUTO JOAQUIN V.GONZALEZ", localidadId:localidad.id, direccion:"LA GUARDA 234", codigo:"7180", circuito:"791", mesaDesde:1060, mesaHasta:1064}).done(crearMesas);
						Escuela.create({nombre:"INST.PRIVADO J.B.ALBERDI", localidadId:localidad.id, direccion:"LAVALLE 5056", codigo:"9248", circuito:"791", mesaDesde:1065, mesaHasta:1068}).done(crearMesas);
						Escuela.create({nombre:"COLEG.STA.TERESITA DEL NIÑO JE", localidadId:localidad.id, direccion:"AV.SAN MARTIN 5455", codigo:"4675", circuito:"791A", mesaDesde:1097, mesaHasta:1108}).done(crearMesas);
						Escuela.create({nombre:"COL.STA.T.DEL NIÑO JESUS(SEC)", localidadId:localidad.id, direccion:"DOMINGO SOBRAL 213", codigo:"9251", circuito:"791A", mesaDesde:1138, mesaHasta:1143}).done(crearMesas);
				});
				Localidad.create({nombre: "BERNAL",partidoId: partido.id, codigoPostal: "1883"}).done(
					function(err,localidad){
						Escuela.create({nombre:"INSTITUTO TINKUNACO", localidadId:localidad.id, direccion:"174 ESQ.FORMOSA", codigo:"11070", circuito:"788", mesaDesde:654, mesaHasta:655}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°48", localidadId:localidad.id, direccion:"ALEM 1545", codigo:"4597", circuito:"786A", mesaDesde:509, mesaHasta:520}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°20", localidadId:localidad.id, direccion:"ZAPIOLA 1170", codigo:"4624", circuito:"787A", mesaDesde:634, mesaHasta:643}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°31", localidadId:localidad.id, direccion:"DARDO ROCHA 1343", codigo:"4584", circuito:"786", mesaDesde:438, mesaHasta:444}).done(crearMesas);
						Escuela.create({nombre:"INSTITUTO BENITO GONZALEZ", localidadId:localidad.id, direccion:"MISIONES 1024", codigo:"4592", circuito:"786", mesaDesde:484, mesaHasta:486}).done(crearMesas);
						Escuela.create({nombre:"CLUB BERNAL OESTE", localidadId:localidad.id, direccion:"MONTEVIDEO 943", codigo:"4593", circuito:"786", mesaDesde:487, mesaHasta:488}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°65", localidadId:localidad.id, direccion:"LOS ANDES Y MALV.ARGENTINAS", codigo:"4628", circuito:"788", mesaDesde:644, mesaHasta:653}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°63", localidadId:localidad.id, direccion:"187 N°609", codigo:"4629", circuito:"788", mesaDesde:656, mesaHasta:664}).done(crearMesas);
						Escuela.create({nombre:"ESC.EDUC.MEDIA N°13/ES N°20", localidadId:localidad.id, direccion:"LA PAMPA 4324", codigo:"4630", circuito:"788", mesaDesde:665, mesaHasta:672}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°60", localidadId:localidad.id, direccion:"190 Y LINIERS S/N°", codigo:"4631", circuito:"788", mesaDesde:673, mesaHasta:682}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°33", localidadId:localidad.id, direccion:"CABO SESSA 1101", codigo:"4632", circuito:"788", mesaDesde:683, mesaHasta:697}).done(crearMesas);
						Escuela.create({nombre:"SOC.DE FOMENTO 25 DE MAYO", localidadId:localidad.id, direccion:"CISTERNA 3441", codigo:"4633", circuito:"788", mesaDesde:698, mesaHasta:701}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°72/ES N°70", localidadId:localidad.id, direccion:"BOEDO 1253", codigo:"4634", circuito:"788", mesaDesde:702, mesaHasta:714}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°70", localidadId:localidad.id, direccion:"DONATO ALVAREZ Y ARMESTI", codigo:"11060", circuito:"788", mesaDesde:715, mesaHasta:719}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°15", localidadId:localidad.id, direccion:"167 Y CERRITO", codigo:"4595", circuito:"786A", mesaDesde:489, mesaHasta:497}).done(crearMesas);
						Escuela.create({nombre:"ESC.EDUC.MEDIA N°6/ES N°15", localidadId:localidad.id, direccion:"ALEM 1545", codigo:"4596", circuito:"786A", mesaDesde:498, mesaHasta:508}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°78/ES N°23", localidadId:localidad.id, direccion:"CHACO 1540", codigo:"4598", circuito:"786A", mesaDesde:521, mesaHasta:527}).done(crearMesas);
						Escuela.create({nombre:"JARDIN DE INFANTES N°943", localidadId:localidad.id, direccion:"FORMOSA 1555", codigo:"9273", circuito:"786A", mesaDesde:528, mesaHasta:529}).done(crearMesas);
						Escuela.create({nombre:"ESCUELA EP N°21", localidadId:localidad.id, direccion:"DARDO ROCHA Y CERRITO", codigo:"4622", circuito:"787A", mesaDesde:620, mesaHasta:633}).done(crearMesas);
				});
		});
	Categoria.create({ nombre: "Diputados Nacionales",Orden: 1}).done(function(err){if(err) console.log(err)});
	Categoria.create({ nombre: "Legisladores Provinciales", Orden: 2}).done(function(err){if(err) console.log(err)});
	Categoria.create({ nombre: "Consejales y Consejeros Escolares", Orden: 3}).done(function(err){if(err) console.log(err)});
       res.send("ok");
  },

  etapa2: function(reg,res){
	
	PartidoPolitico.create({nombre:"GENTE EN ACCION - GEA",orden: 1,numero: "272",votoValido:true}).done(
		function(err, partido) {
			Lista.create({nombre:"LISTA AZUL",orden:1, partidoPoliticoId:partido.id,simplificado: false}).done(
				function(err, lista){
					crearEscrutinioExtranjero(lista,1);
			});
		});
	PartidoPolitico.create({nombre:"M.AVANZADA SOCIALISTA - MAS",orden: 2,numero: "276",votoValido:true}).done(
		function(err, partido) {
			Lista.create({nombre:"LISTA UNICA SOB",orden:2, partidoPoliticoId:partido.id,simplificado: false}).done(
				function(err, lista){
					crearEscrutinioExtranjero(lista,1);
		});
	});
	PartidoPolitico.create({nombre:"UNIDOS POR LA LIBERTAD Y EL TRABAJO",orden: 3,numero: "501",votoValido:true}).done(
		function(err, partido) {
			Lista.create({nombre:"LISTA CELESTE",orden:3, partidoPoliticoId:partido.id,simplificado: false}).done(
				function(err, lista){
					crearEscrutinioExtranjero(lista,1);
			});
	});	
	PartidoPolitico.create({nombre:"COMPROMISO FEDERAL",orden: 4,numero: "502",votoValido:true}).done(
		function(err, partido) {
			Lista.create({nombre:"ES POSIBLE - E",orden:4, partidoPoliticoId:partido.id,simplificado: false}).done(
				function(err, lista){
					crearEscrutinioExtranjero(lista,1);
					crearEscrutinio(lista,2);
					crearEscrutinio(lista,3);
			});
			Lista.create({nombre:"UNIR - U",orden:5, partidoPoliticoId:partido.id,simplificado: false}).done(
				function(err, lista){
					crearEscrutinioExtranjero(lista,1);
					crearEscrutinio(lista,2);
					crearEscrutinio(lista,3);
			});
			Lista.create({nombre:"JUSTICIA Y DIGNIDAD - M",orden:6, partidoPoliticoId:partido.id,simplificado: false}).done(
				function(err, lista){
					crearEscrutinioExtranjero(lista,1);
					crearEscrutinio(lista,2);
					crearEscrutinio(lista,3);
			});
			Lista.create({nombre:"ES POSIBLE BUENOS AIRES. - P",orden:7, partidoPoliticoId:partido.id,simplificado: false}).done(
				function(err, lista){
					crearEscrutinioExtranjero(lista,1);
					crearEscrutinio(lista,2);
					crearEscrutinio(lista,3);
			});
	});

	PartidoPolitico.create({nombre:"VOTOS EN BLANCO",orden: 5,numero: "502",votoValido:true}).done(
		function(err, partido) {
			Lista.create({nombre:"VOTO EN BLANCO",orden:8, partidoPoliticoId:partido.id,simplificado: false}).done(
				function(err, lista){
					crearEscrutinioExtranjero(lista,1);
					crearEscrutinio(lista,2);
					crearEscrutinio(lista,3);
			});
	});

	PartidoPolitico.create({nombre:"VOTOS EN BLANCO",orden: 90,numero: "",votoValido:true}).done(
		function(err, partido) {
			Lista.create({nombre:"VOTOS EN BLANCO",orden:90, partidoPoliticoId:partido.id,simplificado: false}).done(
				function(err, lista){
					crearEscrutinioExtranjero(lista,1);
					crearEscrutinio(lista,2);
					crearEscrutinio(lista,3);
			});
	});
	
	PartidoPolitico.create({nombre:"VOTOS NULOS",orden: 6,numero: "",votoValido:false}).done(
		function(err, partido) {
			Lista.create({nombre:"VOTOS NULOS",orden:91, partidoPoliticoId:partido.id,simplificado: false}).done(
				function(err, lista){
					crearEscrutinioExtranjero(lista,1);
					crearEscrutinio(lista,2);
					crearEscrutinio(lista,3);
			});
			Lista.create({nombre:"VOTOS RECURRIDOS QUE SE REMITEN EN SOBRE Nro.3",orden:92, partidoPoliticoId:partido.id,simplificado: false}).done(
				function(err, lista){
					crearEscrutinioExtranjero(lista,1);
					crearEscrutinio(lista,2);
					crearEscrutinio(lista,3);
			});
			Lista.create({nombre:"VOTOS DE IDENTIDAD IMPUGNADA QUE SE REMITEN EN SOBRE Nro.3",orden:92, partidoPoliticoId:partido.id,simplificado: false}).done(
				function(err, lista){
					crearEscrutinioExtranjero(lista,1);
					crearEscrutinio(lista,2);
					crearEscrutinio(lista,3);
			});
	});

/*
						falta todos estos pero como el certificado va a cambiar veo despues que onda.

						para la prueba esta bien..

						CrearEscrutinios(partido);
            partido = CrearPartido("FRENTE PARA LA VICTORIA", 5, "503");
            lista = CrearLista("LISTA 2 - CELESTE Y BLANCA K", 8, partido,true);
            CrearEscrutinios(lista);
            partido = CrearPartido("FRENTE SOCIAL DE LA PCIA. DE BS. AS.", 6, "1708");
            lista = CrearLista("LINEA BLANCA Y CELESTE - 4", 9, partido,true);
            CrearEscrutinios(lista,  _consejales);
            partido = CrearPartido("FRENTE RENOVADOR", 7, "504");
            lista = CrearLista("CORRIENTE RENOVADORA - LISTA 1", 10, partido,true);
            CrearEscrutinios(lista);
            partido = CrearPartido("UNION POPULAR", 8, "23");
            lista = CrearLista("CORRIENTE POPULAR", 11, partido,true);
            CrearEscrutinios(lista, _consejales);
            partido = CrearPartido("FRENTE POPULAR DEMOCRATICO Y SOCIAL", 9, "505");
            lista = CrearLista("JUNTOS PODEMOS", 12, partido);
            CrearEscrutinios(lista);
            partido = CrearPartido("FRENTE POPULAR DEMOCRATICO Y SOCIAL", 10, "506");
            lista = CrearLista("LISTA 1 A", 13, partido);
            CrearEscrutinios(lista);
            partido = CrearPartido("UNION CON FE", 11, "508");
            lista = CrearLista("UNION CON FE", 14, partido);
            CrearEscrutinios(lista);
            partido = CrearPartido("FRENTE PROGRESISTA CIVICO Y SOCIAL", 12, "509");
            lista = CrearLista("UNIDAD PROGRESISTA - A", 15, partido);
            CrearEscrutinios(lista);
            lista = CrearLista("COALICION CIVICA - F", 16, partido);
            CrearEscrutinios(lista, _consejales);
            lista = CrearLista("GENTE EN QUIEN CONFIAR - D", 17, partido);
            CrearEscrutinios(lista, _consejales);
            lista = CrearLista("ACUERDO PROGRESISTA DE QUILMES - N", 18, partido);
            CrearEscrutinios(lista, _consejales);
            lista = CrearLista("TRANSP. SOLIDARIDAD Y PARTICIPACION - B", 19, partido);
            CrearEscrutinios(lista, _consejales);
            lista = CrearLista("FRENTE CIVICO POR QUILMES - MU", 20, partido);
            CrearEscrutinios(lista, _consejales);
            lista = CrearLista("PROGRESISTAS DE QUILMES - GT", 21, partido);
            CrearEscrutinios(lista, _consejales);
            lista = CrearLista("INTRANSIGENCIA Y RENOVACION - GE", 22, partido);
            CrearEscrutinios(lista, _consejales);
            lista = CrearLista("RENOVACION Y UNIDAD - NV", 23, partido);
            CrearEscrutinios(lista, _legisladoresProvinciales);
            partido = CrearPartido("PARTIDO LEALTAD Y DIGNIDAD DE BS.AS.", 13, "130");
            lista = CrearLista("LEALTAD Y DIGNIDAD", 24, partido);
            CrearEscrutinios(lista, _consejales);
            partido = CrearPartido("JUNTOS POR QUILMES", 14, " ");
            lista = CrearLista("LISTA 1 UNIDOS", 25, partido, true);
            CrearEscrutinios(lista, _consejales);

            

*/
	res.send("ok");			
  }



  
};

