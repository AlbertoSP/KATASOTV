function metodoPiramide(){
	//OBTENIENDO EL VALOR DE NUMERO DE FILAS DE LA PIRAMIDE
	var valor=document.getElementById('numeroFilas').value;
	//@cadenaRetorno SERA LA VARIABLE QUE RETORNE LOS VALORES EN LA PIRAMIDE
	var cadenaRetorno='';
	//@arrayNumerico SERA EL ARRAY QUE GUARDA LOS VALORES DE LAS ULTIMAS FILAS OBTENIDAS
	var arrayNumerico = new Array();
	if(valor<=33){
		//@valorInicial ES LA VARIABLE CON LA QUE INICIA LA PIRAMIDE
		var valorInicial = 1;
		//@filaImpresa TIENE EL VALOR DE LA FILA QUE HASTA EL MOMENTO SE ESTA IMPRIMIENDO
		var filaImpresa  = 1;
		//SE RECORRERÁ SEGÚN LAS FILAS INGRESADAS EN EL INPUT
		while(valor>0){
			if(filaImpresa==1){
				//PARA LA PRIMERA FILA SIEMPRE SE PRESENTARÁ EL VALOR INICIAL SIN MODIFICACION ALGUNA
				cadenaRetorno=cadenaRetorno+valorInicial+'<br>';
			}else{
				if(filaImpresa==2){
					//PARA LA SEGUNDA FILA SE MOSTRARÁ AL INICIO Y FINAL LOS VALORES INICIALES
					cadenaRetorno = cadenaRetorno+valorInicial+'|'+valorInicial+'<br>';
					arrayNumerico[0] = valorInicial;
					arrayNumerico[1] = valorInicial;
				}else{
					//PARA EL CASO DE LAS FILAS SIGUIENTES, SE AGREGAN LOS RESULTADOS DE LAS SUMATORIAS EN ARRAYINTERMEDIO
					var arrayIntermedio = new Array();
					for(var cuenta=0; cuenta<arrayNumerico.length-1; cuenta++){
						arrayIntermedio[cuenta] = arrayNumerico[cuenta] + arrayNumerico[cuenta+1];
					}
					//SE AÑADE A LA CADENA DE RETORNO EL VALOR INICIAL AL INICIO DE LA FILA
					cadenaRetorno = cadenaRetorno+valorInicial+'|';
					//LUEGO SE AÑADEN LOS VALORES PREVIAMENTE OBTENIDOS EN ARRAYINTERMEDIO
					var cuentaInt=0;
					for(cuentaInt; cuentaInt<arrayIntermedio.length; cuentaInt++){
						cadenaRetorno = cadenaRetorno+arrayIntermedio[cuentaInt]+'|';
						arrayNumerico[cuentaInt+1] = arrayIntermedio[cuentaInt];
					}
					//AQUI GUARDAMOS LOS VALORES OBTENIDOS EN ARRAY NUMERICO PARA QUE ESTEN LISTOS PARA LA SIGUIENTE FILA
					arrayNumerico[0] = valorInicial;
					arrayNumerico[cuentaInt+1] = valorInicial;
					//FINALMENTE AÑADIMOS AL FINAL DE LA FILA EL VALOR INICIAL
					cadenaRetorno = cadenaRetorno+valorInicial+'<br>';
				}
			}
			filaImpresa++;
			valor--;
		}
		//FINALMENTE REEMPLAZAMOS EN EL HTML LOS VALORES OBTENIDOS Y LO IMPRIMIMOS EN PANTALLA
		document.getElementById('divSolucion').value="<p>"+cadenaRetorno+"</p>";
		var place = document.getElementById("write");
		place.innerHTML = cadenaRetorno;
		//alert(cadenaRetorno);
  }else{
  	alert('El valor no debe superar a 33');
  }
}