/*Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones entre 1 y 7000
(validar) la temperaruta mínima que se registra en su territorio(entre -50 y 50) hasta que el usuario quiera e
informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.*/

function mostrar()
{

	var nombrePais;
	var cantidadHabitantes;
	var temperatura;
	var respuesta;
	var temperaturaPar;
	var contadorTemperatura;
	var acumuladorTemperatura;
	var paisMenosHabitantes;
	var contadorPaises;
	var acumuladorPaises;


	contadorTemperatura = 0;
	acumuladorTemperatura = 0;
	paisMenosHabitantes = 0;
	contadorPaises = 0;
	contadorTemperatura = 0;


	respuesta = true;

	while(respuesta)
	{
		nombrePais = prompt("Ingrese el nombre de un pais");

		while(!nombrePais)
		{
			nombrePais = prompt("Error, ingrese el nombre de un pais");
		}

		cantidadHabitantes = prompt("Ingrese la cantidad de habitantes entre 1000000 y 7000000");
		cantidadHabitantes = parseInt(cantidadHabitantes);

		while(!cantidadHabitantes || cantidadHabitantes <1000000 || cantidadHabitantes >7000000)
		{
			cantidadHabitantes = prompt("Error, ingrese la cantidad de habitantes entre 1000000 y 7000000");
			cantidadHabitantes = parseInt(cantidadHabitantes);
		}

		temperatura = prompt("Ingrese la temperatura: Entre -50 y 50");

		while(!temperatura || temperatura < -50 || temperatura > 50)
		{
			temperatura = prompt("Ingrese la temperatura: Entre -50 y 50");
		}

		respuesta = confirm("Desea ingresar mas datos?");

		//a) La cantidad de temperaturas pares.
		if (temperatura == 2 % 0)
		{
			contadorTemperatura++;
			acumuladorTemperatura += temperatura
		}

		//b) El nombre del pais con menos habitantes
		if (!paisMenosHabitantes || nombrePais < paisMenosHabitantes)
		{
			paisMenosHabitantes = nombrePais;
		}

		//c) la cantidad de paises que superan los 40 grados.
		if (temperatura > 40)
		{
			contadorPaises++;
			acumuladorPaises += nombrePais;
		}

		//d) el promedio de habitantes entre los paises ingresados


		//f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
		




	} //fin del while general

}
