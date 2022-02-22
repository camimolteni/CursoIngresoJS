/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var respuesta;
	var maximo;
	var minimo;
	var banderaPrimerIngreso; // declaro la variable

	// una BANDERA es una var q guarda un valor, q va estar en dos valores posibles,
	//puede ser true o false, si o no, puede ser 1 o 0 (me dice si acontecio un suceso o no)
	//Sirve para marcar algo
	
	//iniciar variables
	respuesta = true;
	banderaPrimerIngreso = false; // la bandera esta bajo
	
	while(respuesta==true)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);  //como me pide max y min uso bandera, en el ej 10 como me pide el primer num ingresado, puedo usar el contador y me ahorro la bandera

			if (numeroIngresado>maximo || banderaPrimerIngreso == false) //solo pregunta lo de la bandera si no se cumple la primera condicion
		{
			maximo = numeroIngresado;
		}
		if(numeroIngresado<minimo || banderaPrimerIngreso == false)
		{
			minimo = numeroIngresado;
			banderaPrimerIngreso = true;
		}
			respuesta = confirm("Desea ingresar otro numero?");

		}

	txtIdMaximo.value=maximo;
	txtIdMinimo.value=minimo;




	/*if (banderaPrimerIngreso == false) //yo preg si la bandera esta bajo, estonces pregunto, es el 1er numero? Si
		{
			maximo = numeroIngresado; //calculo el maximo y el minimo
			minimo = numeroIngresado;
			banderaPrimerIngreso = true;
		}
		else
		{
			if(numeroIngresado>maximo)
			{
				maximo = numeroIngresado;
			}
			if (numeroIngresado<minimo) // aca no pongo un else porque son dos independientes, no voy a condicionar
									// a si se cumple uno o el otro
			{
				minimo = numeroIngresado;
			}
		}
		}

	txtIdMaximo.value=maximo;
	txtIdMinimo.value=minimo; */

		

}//FIN DE LA FUNCIÓN