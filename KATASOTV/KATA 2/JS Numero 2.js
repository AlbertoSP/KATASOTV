const obj = {
	p1: {
		p2: 'value'
	}
}
alert(validaPath(obj, null, 'p1.p2'));
/*
objeto: Objeto a analizar
valorDefecto: en caso no hallarse el path, devolver este valor
cadenaPath: el path del objeto a analizar
*/
function validaPath(objeto, valorDefecto, cadenaPath) {
	try {
		var valoresReferencia = cadenaPath.split(".");
		var valorAuxiliar = objeto;
		for (var recorreValores = 0; recorreValores < valoresReferencia.length; recorreValores++) {
			valorAuxiliar = valorAuxiliar[valoresReferencia[recorreValores]];
			//valorAuxiliar = valorAuxiliar.getAttribute(valoresReferencia[recorreValores]);
		}
		if (valorAuxiliar == undefined) {
			return valorDefecto;
		} else {
			return valorAuxiliar;
		}
	} catch (e) {
		return valorDefecto;
	}
}