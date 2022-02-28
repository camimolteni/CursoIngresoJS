/*Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

HECHO CON DANI*/

function mostrar()
{
	var respuesta;
	var contadorNumerosPares;
	var contadorNumerosImpares;
	var contadorDeCeros;
	var acumuladorPositivos;
	var contadorPositivos;
	var acumuladorNegativos;
	var letraMinima;
	var letraMaxima;
	var numeroMinimo;
	var numeroMaximo;

	contadorNumerosPares = 0;
	contadorNumerosImpares = 0;
	contadorDeCeros = 0;
	acumuladorPositivos = 0;
	contadorPositivos = 0;
	acumuladorNegativos = 0;
	respuesta = true;

	while (respuesta)
	{
		var letra;
		var numero;

		letra = prompt("Ingrese una letra")

		while(!letra)
		{
			letra = prompt("Error, ingrese una letra")
		}

		numero = prompt("Ingrese un numero entre -100 y 100");
		numero = parseInt(numero);

		while (isNaN(numero) || numero < -100 || numero > 100)
		{
			numero = prompt("Error, ingrese un numero entre -100 y 100");
			numero = parseInt(numero);
		}

		respuesta = confirm("Desea ingresar mas datos?");

		//c) La cantidad de ceros.
		if (numero == 0)
		{
			contadorDeCeros++;
		}
		else if (numero % 2 == 0) //a) La cantidad de números pares.
		{
			contadorNumerosPares++;
		}
		else  //b) La cantidad de números impares.
		{
			contadorNumerosImpares++;
		}

		//d) El promedio de todos los números positivos ingresados.

		if (numero > 0)
		{
			contadorPositivos++;
			acumuladorPositivos += numero;
		}
		else //e) La suma de todos los números negativos.
		{
			acumuladorNegativos += numero;
		}

	//f) El número y la letra del máximo y el mínimo.	
	if (!numeroMinimo || numero < numeroMinimo)
	{
		numeroMinimo = numero;
		letraMinima = letra;
	}

	if(!numeroMaximo || numero > numeroMaximo)
	{
		numeroMaximo = numero;
		letraMaxima = letra;
	}


	} // fin del while

	//d) El promedio de todos los números positivos ingresados.

	document.write("La cantidad de numeros pares" + contadorNumerosPares + "<br>");
	document.write("La cantidad de numeros impares" + contadorNumerosImpares + "<br>");
	document.write("La cantidad de ceros" + contadorDeCeros + "<br>");
	document.write("El promedio de los numeros positivos" + acumuladorPositivos / contadorPositivos + "<br>");
	document.write("La suma de los negativos" + acumuladorNegativos + "<br>");
	document.write("El numero y la letra del minimo: " + numeroMinimo + letraMinima + "<br>");
	document.write("El numero y la letra del maximo: " + numeroMaximo + letraMaxima + "<br>");
}
