/*Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones entre 1 y 7000
(validar) la temperaruta mínima que se registra en su territorio(entre -50 y 50) hasta que el usuario quiera
e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.

LO HICE Y DA BIEN*/

function mostrar()
{
	var nombrePais;
	var cantidadHabitantes;
	var temperatura;
	var respuesta;
	var contadorTempPar;
	var acumuladorTempPar;
	var paisMenosHabitantes;
	var minimaTemperatura;
	var paisMinimaTemperatura;
	var contadorHabitantes;
	var acumuladorHabitantes;
	var contadorPaises;
	var acumuladorPaises;

	contadorTempPar = 0;
	acumuladorTempPar = 0;
	paisMenosHabitantes = 0;
	minimaTemperatura = 0;
	contadorHabitantes = 0;
	acumuladorHabitantes = 0;
	contadorPaises = 0;
	acumuladorPaises = 0;

	respuesta = true;

	while(respuesta)
	{
		nombrePais = prompt("Ingrese el nombre del pais: ");

		while(!nombrePais)
		{
			nombrePais = prompt("Error, ingrese el nombre del pais: ");
		}

		cantidadHabitantes = prompt("Ingrese la cantidad de habitantes: Entre 1 y 7000");
		cantidadHabitantes = parseInt(cantidadHabitantes);

		while(isNaN(cantidadHabitantes) || cantidadHabitantes <1 || cantidadHabitantes > 7000)
		{
			cantidadHabitantes = prompt("Error, reingrese la cantidad de habitantes: Entre 1 y 7000");
			cantidadHabitantes = parseInt(cantidadHabitantes);
		}

		temperatura = prompt("Ingrese la temperatura: Entre -50 y 50");
		temperatura = parseInt(temperatura);

		while(isNaN(temperatura) || temperatura < -50 || temperatura > 50)
		{
			temperatura = prompt("Error, reingrese la temperatura: Entre -50 y 50");
			temperatura = parseInt(temperatura);
		}

		//a) La cantidad de temperaturas pares.
		if (temperatura % 2 == 0)
		{
			contadorTempPar++;
			acumuladorTempPar += temperatura;
		}

		//b) El nombre del pais con menos habitantes
		if (!paisMenosHabitantes || nombrePais < paisMenosHabitantes)
		{
			paisMenosHabitantes = nombrePais
		}

		//c) la cantidad de paises que superan los 40 grados.
		if (temperatura > 40)
		{
			contadorPaises++;
			acumuladorPaises += nombrePais;
		}

		//f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
		if (!minimaTemperatura || temperatura < minimaTemperatura)
		{
			minimaTemperatura = temperatura;
			paisMinimaTemperatura = nombrePais;
		}

		//d) el promedio de habitantes entre los paises ingresados
		contadorHabitantes++;
		acumuladorHabitantes += cantidadHabitantes;



	respuesta = confirm("Desea pedir mas datos?");
	} //fin while general

	document.write("La cantidad de temperaturas pares es: " + contadorTempPar + "<br>");
	document.write("El nombre del pais con menos habitantes: " + paisMenosHabitantes + "<br>");
	document.write("La cantidad de paises que superan los 40 grados: " + contadorPaises + "<br>");
	document.write("El promedio de habitantes entre los paises ingresados: " + acumuladorHabitantes / contadorHabitantes + "<br>");
	document.write("La temperatura mínima ingresada es: " + minimaTemperatura + " y el nombre del pais con esa temperatura: " + paisMinimaTemperatura + "<br>");
	
	

}
