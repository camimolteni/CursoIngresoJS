/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos).

10- De los positivos el mas grande
11- De los negativos el mas chico */
function mostrar()
{
	//declarar contadores y variables, NO SE INICIALIZAN MAX Y MIN!!!
	
	var numeroIngresado;
	var respuesta;
	var sumaPositivos;
	var sumaNegativos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var maximoPositivo;
	var minimoNegativo;
	

	respuesta = true;
	sumaNegativos = 0;
	sumaPositivos = 0;
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPares = 0;
	


	while(respuesta==true)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado >0)
		{
			sumaPositivos += numeroIngresado;
			contadorPositivos++;
			if(numeroIngresado>maximoPositivo || contadorPositivos==1) // porque igualar a 1? porque me pide el 1er positivo. entonces cuando ingrese otro num, no se cumple la funcion, entonces me ahorro poner la bandera
			{
				maximoPositivo = numeroIngresado;
			}
		}
		else
		{
			if (numeroIngresado <0)
			{
				sumaNegativos += numeroIngresado;
				contadorNegativos++;
				if(numeroIngresado<minimoNegativo || contadorNegativos==1)
				{
					minimoNegativo = numeroIngresado;
				}
			}
			else
			{
				contadorCeros++;
			}
		}

		if(numeroIngresado%2 == 0)
		{
			contadorPares++;
		}


		respuesta=confirm("Desea ingresar otro numero?");

	}//fin del while

	diferencia = contadorPositivos - contadorNegativos

	document.write("La suma de negativos es: "+sumaNegativos + "<br>");
	document.write("La suma de positivos es: "+sumaPositivos + "<br>");
	document.write("La cantidad de los positivos es: "+contadorPositivos + "<br>");
	document.write("La cantidad de los negativos es: "+contadorNegativos + "<br>");
	document.write("La cantidad de los ceros es: "+contadorCeros + "<br>");
	document.write("La cantidad de los pares es: "+contadorPares + "<br>");

	if(contadorPositivos>0)
	{
		promedioPositivos = sumaPositivos/contadorPositivos;
		document.write("El promedio de los positivos es: "+promedioPositivos + "<br>");
	}
	else
	{
		document.write("No se ingresaron numeros positivos <br>");
	}

	if(contadorNegativos>0)
	{
		promedioNegativos = sumaNegativos/contadorNegativos;
		document.write("El promedio de los negativos es :"+promedioNegativos + "<br>");
	}
	else
	{
		document.write("No se ingresaron numeros negativos <br>");
	}

	document.write("La diferencia entre cantidad de positivos y negativos es:"+ diferencia + "<br>");


}//FIN DE LA FUNCIÓN